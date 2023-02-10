import { BaseDatabase } from './BaseDatabase';
import { post } from '../model/post'

export class PostDatabase extends BaseDatabase {

    private postTable = 'labook_posts'

    public createPost = async (post: post) => {
        try {
            PostDatabase.connection.initialize()
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                author_id: post.authorId
            }).into(this.postTable)
        } catch (error: any) {
            throw new Error(error.message)
        } finally {
            console.log('Conexão Encerrada!');
            PostDatabase.connection.destroy();
        }
    }

    public getPosts = async () => {

        try {
            PostDatabase.connection.initialize()
            const allPosts = await PostDatabase.connection.select().from(this.postTable)

            return allPosts;
        } catch (error: any) {
            throw new Error(error.message);
        } finally {
            console.log("Conexão Encerrada!")
            PostDatabase.connection.destroy();
        }
    }

    public getPostId = async (id: string) => {
        try {
            PostDatabase.connection.initialize()
            const allPostsId = await PostDatabase.connection.select('*').where({id}).from(this.postTable)
            return allPostsId
        } catch (error: any) {
            throw new Error(error.message);
        } finally {
            console.log("conexão encerrada!");
            PostDatabase.connection.destroy();
        }
    }
}