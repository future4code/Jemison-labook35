import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness"

export class PostController {

    postBusiness = new PostBusiness()

    public createPost = async (req: Request, res: Response) => {
        try {
            const input = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                createdAt: req.body.createdAt,
                authorId: req.body.authorId
            }

            await this.postBusiness.createPost(input)

            res.status(201).send({ message: "Post Criado!" })
        } catch (error: any) {
            res.status(400).send(error.message || 400).send(error.message || error.sqlMessage)
        }
    }

    public getPosts = async (req: Request, res: Response) => {

        try {
            const posts = await this.postBusiness.getPosts()

            res.status(201).send(posts)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public getPostsId = async (req: Request, res: Response) => {

        try {

            const id = req.params.id
            const postsId = await this.postBusiness.getPostId(id)

            res.status(201).send(postsId)
        } catch (error: any) {
            res.status(400).send(error.message || 400).send(error.message || error.sqlMessage)
        }
    }
}