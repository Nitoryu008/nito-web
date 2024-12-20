import { Octokit } from "@octokit/core";
const octokit = new Octokit({ auth: import.meta.env.GITHUB_ACCESS_TOKEN });
let response;
let page = 1;
const LAST_PAGE_PATTERN = /rel="last"/;

type HistoryItem = {
  date: Date;
  title: string;
};

const historyItems: HistoryItem[] = new Array(0);

do {
  response = await octokit.request("GET /repos/{owner}/{repo}/pulls", {
    owner: "Nitoryu008",
    repo: "nito-web",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
    state: "all",
    base: "main",
    per_page: 100,
    page: page++,
  });
  console.log(page - 1, response.headers.link);
  response.data.forEach((item) => {
    if (item.merged_at) {
      historyItems.push({
        date: new Date(item.merged_at),
        title: item.title,
      });
    }
  });
} while (LAST_PAGE_PATTERN.test(response.headers.link as string));

historyItems.sort((a, b) => {
  return b.date.getTime() - a.date.getTime();
});

console.log(historyItems);

export const histories = historyItems;
