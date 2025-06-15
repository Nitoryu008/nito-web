export function format(date: Date) {
  return date.toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function splitText(target: string | Element) {
  if (typeof target == "string") {
    target = document.querySelector(target) as Element;
  }

  const text = target.textContent?.trim() as string;

  const newTextContent = [...text]
    .map((char) => `<span>${char}</span>`)
    .join("");
  target.innerHTML = newTextContent;

  return target.querySelectorAll("span");
}

import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export async function getPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");

  posts.sort((a, b) => {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });

  return posts;
}

export async function getWorks(): Promise<CollectionEntry<"work">[]> {
  const posts = await getCollection("work");

  posts.sort((a, b) => {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });

  return posts;
}
