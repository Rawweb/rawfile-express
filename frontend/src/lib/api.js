const API_BASE = import.meta.env.VITE_API_URL || '/api';

const api = {
  // ----- PUBLIC ROUTES -----

  track: {
    getOne: async id => {
      const res = await fetch(`${API_BASE}/track/${id}`);
      if (!res.ok) throw new Error('Tracking ID not found');
      return res.json();
    },

    getAll: async (page = 1, limit = 4) => {
      const res = await fetch(
        `${API_BASE}/track/all?page=${page}&limit=${limit}`
      );
      if (!res.ok) throw new Error('Unable to fetch shipments');
      return res.json();
    },
  },

  quote: {
    create: async payload => {
      const res = await fetch(`${API_BASE}/quote/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Unable to submit quote');
      return res.json();
    },

    getAll: async (page = 1) => {
      const res = await fetch(`${API_BASE}/quote/all?page=${page}`);
      if (!res.ok) throw new Error('Unable to fetch quotes');
      return res.json();
    },

    markContacted: async (id, contacted) => {
      const res = await fetch(`${API_BASE}/quote/contacted/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contacted }),
      });
      return res.json();
    },

    deleteQuote: async id => {
      const res = await fetch(`${API_BASE}/quote/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    },
  },

  // ----- ADMIN ROUTES -----

  admin: {
    login: async payload => {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Invalid email or password');

      return res.json(); // contains token
    },

    createShipment: async (payload, token) => {
      const res = await fetch(`${API_BASE}/track/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to create shipment');
      return res.json();
    },

    updateShipment: async (id, payload, token) => {
      const res = await fetch(`${API_BASE}/track/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to update shipment');
      return res.json();
    },

    deleteShipment: async (id, token) => {
      const res = await fetch(`${API_BASE}/track/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Failed to delete shipment');
      return res.json();
    },

    // deleteQuote: async id => {
    //   const res = await fetch(`${API_BASE}/quote/${id}`, {
    //     method: 'DELETE',
    //   });
    //   return res.json();
    // },
  },
};

export default api;
