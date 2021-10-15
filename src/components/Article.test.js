import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import Article from './Article';
import { render, screen } from '@testing-library/react';

const testArticle = {
    id: 1,
    headline: "text expect",
    createdOn: "today",
    author:"",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}

const testArticleNoAuthor = {
    id: 1,
    headline: "text expect",
    createdOn: "yesterday",
    author:null,
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}

test('renders component without errors', ()=> {
  render(<Article article={testArticle}/>);
});

test('renders headline, author from the article when passed in through props', ()=> { 
  render(<Article article={testArticle}/>);
  const renderArticle = screen.queryByText(/text expect/i);
  expect(renderArticle).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
  render(<Article article={testArticleNoAuthor}/>);
  const renderAssociated = screen.queryByText(/Associated Press/i);
  expect(renderAssociated).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
  const handleDelete = jest.fn();
  render(<Article article={testArticle} handleDelete={handleDelete}/>);
  const button = screen.getByTestId('deleteButton');
  userEvent.click(button);
  
  expect(handleDelete).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.