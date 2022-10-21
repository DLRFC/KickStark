import { Web3Storage } from "web3.storage";

export const web3storage = new Web3Storage({ token: <string>process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN });