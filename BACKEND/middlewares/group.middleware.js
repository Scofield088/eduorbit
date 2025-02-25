const validateGroupLink = (req, res, next) => {
    const { groupLink } = req.body;
    if (!groupLink || groupLink.trim() === '') {
      return res.status(400).json({ message: 'Invalid group link' });
    }
    next();
  };
  
  module.exports = { validateGroupLink };
