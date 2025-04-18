import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.GITHUB_ACCESS_TOKEN });

let page = 1;
const LAST_PAGE_PATTERN = /rel="last"/;
let response;

type HistoryItem = {
  date: Date;
  title: string;
};

const owner = "Nitoryu008";
const repo = "nito-web";
const apiVersion = "2022-11-28";
const notShownLabelID = 8407755123;

const historyItems: HistoryItem[] = new Array(0);

do {
  response = await octokit.request("GET /repos/{owner}/{repo}/pulls", {
    owner: owner,
    repo: repo,
    headers: {
      "X-GitHub-Api-Version": apiVersion,
    },
    state: "all",
    base: "main",
    per_page: 100,
    page: page++,
  });
  console.log(page - 1, response.headers.link);

  for (const pr of response.data) {
    if (pr.merged_at) {
      const res = await octokit.request(
        "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
        {
          owner: owner,
          repo: repo,
          issue_number: pr.number,
          headers: {
            "X-GitHub-Api-Version": apiVersion,
          },
        }
      );

      let isTargetPr = true;
      for (const label of res.data) {
        if (label.id == notShownLabelID) isTargetPr = false;
      }

      if (isTargetPr) {
        historyItems.push({
          date: new Date(pr.merged_at),
          title: pr.title,
        });
      }
    }
  }
} while (LAST_PAGE_PATTERN.test(response.headers.link as string));

historyItems.sort((a, b) => {
  return b.date.getTime() - a.date.getTime();
});

console.log(historyItems);

export const histories = historyItems;
