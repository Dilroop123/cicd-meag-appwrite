import { Client, ID, Databases, Storage, Query } from "appwrite";
import config from "../config/config";

export type Blog = {
    title: string;
    content: string;
    featuredImage: string;
    status: string;
    userId: string;
    slug: string;
}

class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client.setProject(config?.appwriteProjectId).setEndpoint(config?.appwriteUrl);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createBlog({ title,
        content,
        featuredImage,
        status,
        slug,
        userId }: Blog) {

        try {
            const result = await this.database.createDocument(
                config?.appwriteDatabaseId, // databaseId
                config?.appwriteCollectionId, // collectionId
                ID.unique(), // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    slug,
                    userId

                }, // data
            );
            console.log(result);
            return result;
        } catch (err: any) {
            throw err;
        }
    }

    async updateBlog(documentId: string, { title,
        content,
        featuredImage,
        status,
        slug,

        userId }: Blog) {
        try {
            return await this.database.updateDocument(
                config?.appwriteDatabaseId, // databaseId
                config?.appwriteCollectionId, // collectionId
                documentId, // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    slug,
                    userId
                }, // data (optional)
            );
        } catch (error) {
            throw error;
        }
    }

    async deleteBlog({ documentId }: { documentId: string }) {
        try {
            return await this.database.deleteDocument(
                config?.appwriteDatabaseId, // databaseId
                config?.appwriteCollectionId, // collectionId
                documentId
            );
        } catch (error) {
            throw error;
        }
    }

    async getBlog({ documentId }: { documentId: string }) {
        try {
            return await this.database.getDocument(
                config?.appwriteDatabaseId, // databaseId
                config?.appwriteCollectionId, // collectionId
                documentId
            );
        } catch (error) {
            throw error;
        }
    }

    async getAllBlog(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.database.listDocuments(
                config?.appwriteDatabaseId, // databaseId
                config?.appwriteCollectionId, // collectionId
                queries
            );
        } catch (error) {
            throw error;
        }
    }

    //STORAGE SERVICES

    async uploadImage(file: any) {
        try {
            return await this.bucket.createFile(
                config?.appwriteBucketId,// bucketId
                ID.unique(),
                file // file

            );
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(file: any) {
        try {
            return this.bucket.getFilePreview(
                config?.appwriteBucketId,// bucketId
                file // file
            );
        } catch (error) {
            throw error;
        }
    }

    async deleteStorageImage(fileId: any) {
        try {
            return await this.bucket.deleteFile(
                config?.appwriteBucketId,// bucketId
                fileId// fileId
            );
        } catch (error) {

        }
    }

}

const service = new Service();
export default service;


