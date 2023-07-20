import userRepository from "../repositories/userRepository.js";

async function deleteById({id}) {
    await userRepository.deleteById(+id)
}

async function getById({id}) {
    return await userRepository.findUserByKey("id", +id)
}

async function getAllUsers(){
    return await userRepository.findMany()
}

async function createUser(body){
    const {email} = body
    const existentEmail = await userRepository.findUserByKey("email", email);

    if (existentEmail) {
        throw {type: "user", message: "Email already existent", status: 409}
    }

    await userRepository.createUser(body)
}

async function patchUser({body, params}) {
  const { email } = body;
  const id = params.id

  if (email) {
      const existentEmail = await userRepository.findUserByKey("email", email);
    
      if (existentEmail) {
        throw { type: "user", message: "Email already existent", status: 409 };
      }
  }

  await userRepository.patchUser({body, id: +id});
}

export default { deleteById, getById, getAllUsers, createUser, patchUser };