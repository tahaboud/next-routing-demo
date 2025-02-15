import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const seedProducts = async () => {
    const count = await prisma.product.count();
    if (count === 0) {
        await prisma.product.createMany({
            data: [
                {title: "Product 1", price: 100, description: "Description 1"},
                {title: "Product 2", price: 200, description: "Description 2"},
                {title: "Product 3", price: 300, description: "Description 3"},
            ]
        })
    }
}

seedProducts();

export const getProducts = async (query?: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (query) {
        return prisma.product.findMany({where: {OR: [{title: {contains: query}, description: {contains: query}}]}});
    }
    return prisma.product.findMany();
}

export const getProduct = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.findUnique({
        where: {id}
    })
}

export const addProduct = async (title: string, price: number, description: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.create({
        data: {title, price, description}
    })
}

export const updateProduct = async (id: number, title: string, price: number, description: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.update({where: {id}, data: {title, price, description}});
}

export const deleteProduct = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return prisma.product.delete({where: {id}});
}
