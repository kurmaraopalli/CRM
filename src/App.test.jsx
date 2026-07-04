import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the CRM dashboard heading', () => {
    render(<App />);
    expect(screen.getByText(/customer relationships, streamlined/i)).toBeInTheDocument();
  });

  it('renders the add contact form', () => {
    render(<App />);
    const form = screen.getByRole('form', { name: /add contact/i });

    expect(within(form).getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save contact/i })).toBeInTheDocument();
  });

  it('loads saved contacts from browser storage', () => {
    localStorage.setItem('crm-contacts', JSON.stringify([{ id: 99, name: 'Sam', company: 'Free Tier Co', email: 'sam@example.com', phone: '', value: '$1,000', status: 'Lead / Prospect', notes: '' }]));

    render(<App />);

    expect(screen.getByRole('heading', { name: /sam/i })).toBeInTheDocument();
  });
});
