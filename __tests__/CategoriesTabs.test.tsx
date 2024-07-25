import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import CategoriesTabs from '../components/ui/home/categories-tabs';

beforeEach(() => {
  render(
    <CategoriesTabs
      categories={[
        {
          id: '66798198ee251e9881be404f',
          name: 'Storage & Organization',
        },
        {
          id: '66798198ee251e9881be4049',
          name: 'Bedroom',
        },
      ]}
      subcategories={[
        {
          id: '667aac74547fb73491fc8d02',
          subcategory_ikea_id: '10550',
          category_id: '66798198ee251e9881be404f',
          name: 'Storage boxes & organization bins',
          imageUrl:
            'https://www.ikea.com/us/en/images/products/tigerfink-storage-with-compartments-turquoise__1092598_pe862931_s5.jpg',
        },
        {
          id: '667aac74547fb73491fc8cf0',
          subcategory_ikea_id: '700513',
          category_id: '66798198ee251e9881be4049',
          name: 'Beds with mattresses included',
          imageUrl:
            'https://www.ikea.com/us/en/images/products/malm-bed-frame-with-mattress-black-brown-vesteroey-medium-firm__1101514_pe866693_s5.jpg',
        },
      ]}
    />,
  );
});

describe('CategoriesTabs', () => {
  it('renders the category tabs correctly', () => {
    const categoryTabs = screen.getByTestId('category-tabs');
    expect(categoryTabs).toBeInTheDocument();

    const tabs = within(categoryTabs).getAllByRole('button');
    expect(tabs.length).toBe(2);

    const tabLabels = tabs.map((tab) => tab.textContent);
    expect(tabLabels).toEqual(['Storage & Organization', 'Bedroom']);
  });

  it('highlights the active category tab', () => {
    const categoryTabs = screen.getByTestId('category-tabs');
    const tabs = within(categoryTabs).getAllByRole('button');
    const activeTab = tabs[0];
    expect(activeTab).toHaveClass('border-slate-800');
  });
});

describe('Subcategories', () => {
  it('shows the right subcategories when a category tab is clicked', () => {
    fireEvent.click(screen.getByText('Bedroom'));

    expect(
      screen.getByText('Beds with mattresses included'),
    ).toBeInTheDocument();
  });
});
