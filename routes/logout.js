const logout = (req, res, next) => {
    try {
      req.session.destroy();
      res.status(200).send();
     } catch(error) {
       res.status(402).send()
     };

};

module.exports = {
 logout
};