import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from '../services/articleServices';
jest.mock('../services/articleServices');


test("renders zero articles without errors", async () => {
  articleService.mockResolvedValueOnce({
    data: [],
  });
  render(<View/>);
  const zeroArticle = await screen.queryAllByTestId(/article/i);
  expect(zeroArticle).toHaveLength(0);
});

test("renders three articles without errors", async ()=> {
  articleService.mockResolvedValueOnce({
    data: [
      {
        id: 1,
        headline: "Article 1",
        createdOn: "today",
        author:"me",
        image: 134,
        summary: "Great article."   
      },

      {
          id: 2,
          headline: "Article 2",
          createdOn: "today",
          author:"myself",
          image: 134,
          summary: "Worst article ever."   
      },

      {
          id: 3,
          headline: "Article 3",
          createdOn: "today",
          author:"and I",
          image: 134,
          summary: "Be proud of yourself."   
      }
    ]
  });

  render(<View/>);

  await waitFor(() => {
    const articles = screen.queryAllByTestId(/article/i);
    console.log("articles----", articles);
    expect(articles).toHaveLength(3);

  })

  // const articles = await screen.queryAllByTestId(/headline/i);

  
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.

// > _Add the following tests within View.test.js._

// - [ ] Build a test that shows the `View` component can render zero articles without errors. Make sure the mock service called made when View mounts.
// - [ ] Build a test that shows the `View` component can render three articles without errors. Make sure the mock service called made when View mounts.