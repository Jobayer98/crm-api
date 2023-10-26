const customRoles = (...roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (!roles.includes(user.role)) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
    next();
  };
};

module.exports = customRoles;
