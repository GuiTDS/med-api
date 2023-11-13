import NotFoundError from "../errors/NotFoundError.js";

function handler404(req, res, next) {
    console.log('passou pelo handler 404');
    const error404 = new NotFoundError();
    next(error404);
}

export default handler404;