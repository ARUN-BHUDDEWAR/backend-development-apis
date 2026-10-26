export function authorizeModification(req, res, next) {
  const isParent = req.user?.role === "parent";
  const isOwnUser = String(req.user?.id) === String(req.params.userId);
  const isAuthorizedChild = req.user?.role === "child" && isOwnUser;

  if (!isParent && !isAuthorizedChild) {
    return res.status(403).json({ error: "Access denied" });
  }

  next();
}
