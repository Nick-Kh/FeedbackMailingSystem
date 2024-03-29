export default (req, res, next) => {
  if(!req.user) {
    return res.status(401).send({ error: 'Unathorized user' });
  }
  next();
}