import { useEffect, useMemo, useState } from 'react';

const initialContacts = [
  { id: 1, name: 'Ava Patel', company: 'Northstar Labs', email: 'ava@northstar.com', phone: '+1 555 0102', value: '$18,400', status: 'Proposal Sent', notes: 'Follow-up after demo' },
  { id: 2, name: 'Marcus Lee', company: 'BrightPath', email: 'marcus@brightpath.io', phone: '+1 555 0148', value: '$9,200', status: 'Negotiation', notes: 'Pricing discussion in progress' },
  { id: 3, name: 'Nora Kim', company: 'Apex Retail', email: 'nora@apexretail.com', phone: '+1 555 0119', value: '$26,500', status: 'Lead / Prospect', notes: 'Needs onboarding demo' }
];

const stages = ['Lead / Prospect', 'Contacted / Qualified', 'Proposal Sent', 'Negotiation', 'Closed Won', 'Closed Lost'];

function App() {
  const [contacts, setContacts] = useState(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('crm-contacts') : null;
    return stored ? JSON.parse(stored) : initialContacts;
  });
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', value: '', status: 'Lead / Prospect', notes: '' });

  useEffect(() => {
    window.localStorage.setItem('crm-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = useMemo(() => {
    const term = search.toLowerCase();
    return contacts.filter((contact) => [contact.name, contact.company, contact.email].some((value) => value.toLowerCase().includes(term)));
  }, [contacts, search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setContacts((current) => [
      {
        id: Date.now(),
        ...form,
        value: form.value || '$0'
      },
      ...current
    ]);

    setForm({ name: '', company: '', email: '', phone: '', value: '', status: 'Lead / Prospect', notes: '' });
  };

  const groupedContacts = stages.reduce((acc, stage) => {
    acc[stage] = filteredContacts.filter((contact) => contact.status === stage);
    return acc;
  }, {});

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand-row">
            <div className="logo-mark" aria-label="KRP logo">KRP</div>
            <div>
              <p className="eyebrow">KRP CRM</p>
              <h1>Customer relationships, streamlined.</h1>
            </div>
          </div>
          <p className="muted">A lightweight starter for tracking leads, handoffs, and follow-up activity.</p>
        </div>

        <form className="panel" onSubmit={handleSubmit} role="form" aria-label="Add contact">
          <h2>Add contact</h2>
          <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Name" required />
          <input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} placeholder="Company" />
          <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="Email" required />
          <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="Phone" />
          <input value={form.value} onChange={(event) => setForm({ ...form, value: event.target.value })} placeholder="Deal value" />
          <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}>
            {stages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
          <textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} placeholder="Notes" rows="3" />
          <button type="submit">Save contact</button>
        </form>
      </aside>

      <main className="content">
        <section className="hero panel">
          <div>
            <p className="eyebrow">Pipeline snapshot</p>
            <h2>Keep every lead moving.</h2>
          </div>
          <div className="stats">
            <div>
              <strong>{contacts.length}</strong>
              <span>Contacts</span>
            </div>
            <div>
              <strong>{filteredContacts.filter((contact) => contact.status === 'Closed Won').length}</strong>
              <span>Won</span>
            </div>
            <div>
              <strong>{filteredContacts.filter((contact) => contact.status === 'Negotiation').length}</strong>
              <span>In negotiation</span>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="toolbar">
            <h2>Contacts</h2>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name, company, or email" />
          </div>
          <div className="contact-list">
            {filteredContacts.map((contact) => (
              <article key={contact.id} className="contact-card">
                <div>
                  <h3>{contact.name}</h3>
                  <p>{contact.company}</p>
                </div>
                <div>
                  <span className="pill">{contact.status}</span>
                  <p>{contact.email}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel pipeline">
          <h2>Sales pipeline</h2>
          <div className="pipeline-columns">
            {stages.map((stage) => (
              <div key={stage} className="pipeline-column">
                <h3>{stage}</h3>
                {groupedContacts[stage].map((contact) => (
                  <div key={contact.id} className="pipeline-card">
                    <strong>{contact.name}</strong>
                    <p>{contact.company}</p>
                    <span>{contact.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
