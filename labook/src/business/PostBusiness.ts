
import { IdGenerator } from '../services/IdGeneration';
import { PostDatabase } from './../data/PostDatabase';

export class PostBusiness {

   postDatabase = new PostDatabase

   public createPost = async (input: any) => {

      try {

         const { photo, description, type, authorId } = input

         if (
            !photo ||
            !description ||
            !type ||
            !authorId
         ) {
            throw new Error('Preencha os campos "photo","description", "type" e "authorId"')
         }

         const id = IdGenerator.generateId()
         const createdAt = new Date()

         await this.postDatabase.createPost({
            id,
            photo,
            description,
            type,
            createdAt,
            authorId
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }

   public getPosts = async () => {

      try {
         console.log("Tudo Certo")
         return await this.postDatabase.getPosts()

      } catch (error: any) {
         throw new Error(error.message);
      }
   }

   public getPostId = async (id: string) => {

      try {
         
         console.log('Tudo Certo')
         return await this.postDatabase.getPostId()
      }catch (error: any) {
         throw new Error(error.message);
      }
   }


   //    getPostsId = async (req: Request, res: Response) => {

   //       try {

   //           const id = req.params.id

   //           const queryResult = await this.postBusiness("labook_posts").select("*").where({ id })

   //           if (!queryResult[0]) {
   //               res.statusCode = 404
   //               message = "Post not found"
   //               throw new Error(message)
   //           }

   //           const post: post = {
   //               id: queryResult[0].id,
   //               photo: queryResult[0].photo,
   //               description: queryResult[0].description,
   //               type: queryResult[0].type,
   //               createdAt: queryResult[0].created_at,
   //               authorId: queryResult[0].author_id,
   //           }

   //           res.status(200).send({ message, post })

   //       } catch (error: any) {
   //           let message = error.sqlMessage || error.message
   //           res.statusCode = 400
   //           res.send({ message })
   //       }
   //   }
}