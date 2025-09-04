import { repositoryAnimeTrailer } from "../repositories/anime-trailer-repository"
import { FilterAnimeTrailerModel } from "../modules/filter-anime-models";
import { StatusCode } from "../utils/status-code";



export const serviceFilterAnimeTrailer = async (animetrailer: string | undefined): Promise<FilterAnimeTrailerModel> => {
   //define a interface de retorno
    let responseFormat: FilterAnimeTrailerModel = {
        statusCode: 0,
        body: [],
    }
    // pega o query string após o "?"
    const queryPart = animetrailer?.split("?")[1] || "";
    const params = new URLSearchParams(queryPart);

    // pega o animename
    const animeName = params.get("animename") ? decodeURIComponent(params.get("animename")!.replace(/\+/g, " ")): undefined;
   
    // pega categorias (pode ser várias)
    const category = params.getAll("category").map(C => decodeURIComponent(C.replace(/\+/g, " ")));

    // busca os dados no repositorio
    const data = await repositoryAnimeTrailer(animeName, category.length > 0 ? category: undefined);

    //verifica se tem conteudo 
    if (data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;
    return responseFormat;

}


//O que decodeURIComponent faz?
    //Ela é uma função nativa do JavaScript que converte caracteres de URL (%20, %C3%A7, etc.) de volta para seus caracteres originais (espaço, ç, etc.). Adicionei também um .replace() para o caso de o navegador usar + em vez de %20 para espaços.