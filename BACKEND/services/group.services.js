const axios = require('axios');

const GroupService = {
  createOrJoinGroup: async (groupLink) => {
    try {
      const response = await axios.post('/api/group', { groupLink });
      return response.data;
    } catch (error) {
      throw new Error('Error creating/joining group:', error);
    }
  },

  fetchGroupDetails: async (groupLink) => {
    try {
      const response = await axios.get(`/api/group/${groupLink}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching group details:', error);
    }
  },

  addMessage: async (groupLink, user, text) => {
    try {
      const response = await axios.post(`/api/group/${groupLink}/message`, { user, text });
      return response.data;
    } catch (error) {
      throw new Error('Error sending message:', error);
    }
  },
};

module.exports = GroupService;
