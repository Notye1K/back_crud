import userService from "../services/userService.js";

export async function createUser(req, res) {
  await userService.createUser(req.body);
  res.sendStatus(201);
}

export async function updateUser(req, res) {
  await userService.patchUser(req);
  res.sendStatus(200);
}

export async function deleteUser(req, res) {
  await userService.deleteById(req.params);
  res.sendStatus(200);
}

export async function getUser(req, res) {
  const result = await userService.getById(req.params);
  res.send(result);
}

export async function getUsers(req, res) {
  const result = await userService.getAllUsers();
  res.send(result);
}
