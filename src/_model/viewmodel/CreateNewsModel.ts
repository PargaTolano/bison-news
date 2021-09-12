export class CreateNewsModel{
    public constructor(
        public  title:       string,
        public  resumen:     string,
        public  content:     string,
        public  palabras:    string[],
        public  categorias:  any[],
        public  media:       any[],
    ){}
};