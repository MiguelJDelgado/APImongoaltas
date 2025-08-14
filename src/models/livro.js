import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "O título do livro é obrigatório"]
    },
    preco: {
      type: Number,
      required: [true, "O preço do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'autores', 
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String, 
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["Alura", "Edebê"],
        message: "A editora {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
      }
      /*min: [10, "O número de páginas deve estar entre 10 e 5000. O número {VALUE} não é um valor permitido"],
      max: [5000, "O número de páginas deve estar entre 10 e 5000. O número {VALUE} não é um valor permitido"]*/
    }
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;