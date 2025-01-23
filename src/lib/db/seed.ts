import data from "../data"
import { connectToDatabase } from "../db"
import { cwd } from "process"
import { loadEnvConfig } from "@next/env"
import Product from "./models/product.model"



loadEnvConfig(cwd())

const main = async () => {
  try {
    const {  products, } = data
    await connectToDatabase(process.env.MONGODB_URI)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)

    console.log({createdProducts, message:'Seed completed successfully'})
    process.exit(0)
    } catch (error) {
        console.error(`Seed failed with error: ${error}`)
        throw new Error('Failed to seed database')      }}

        main()