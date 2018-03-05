import axios from "axios"
import mockAdapter from "axios-mock-adapter"

import news from "./data/newsList"
import list from "./data/musicList"

const mock = new mockAdapter(axios);

mock.onGet("/sina").reply(200, {
  news: news
});
mock.onGet("/detail").reply((config) => {

  let newsId = config.params.id;
  return new Promise((resolve, reject) => {
    news.forEach((item, index) => {
      if (item.newsId == newsId) {
        resolve([200, item])
      }
    });

  });
});

mock.onGet("/list").reply(200, {
  list
});

mock.onGet("/music").reply((config) => {

  let musicId = config.params.id;
  return new Promise((resolve, reject) => {
    list.forEach((item, index) => {
      if (item.musicId == musicId) {
        resolve([200, item])
      }
    });

  });
});
