import prismaClient from "../database.js";

async function patchUser({ body, id }) {
  return await prismaClient.user.update({
    where: { id },
    data: { ...body },
  });
}

async function createUser(body) {
  await prismaClient.user.create({
    data: { ...body },
  });
}

async function findUserByKey(key, value) {
  return await prismaClient.user.findUnique({
    where: {
      [key]: value,
    },
  });
}

async function findMany() {
  return await prismaClient.user.findMany();
}

async function deleteById(id) {
  return await prismaClient.user.delete({
    where: { id },
  });
}

export default {
  patchUser,
  createUser,
  findUserByKey,
  findMany,
  deleteById,
};
