const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Por favor, añade el nombre del restaurante'],
            trim: true
        },
        direccion: {
            type: String,
            required: [true, 'Por favor, añade la dirección del restaurante']
        },
        telefono: {
            type: String,
            required: [true, 'Por favor, añade un número de teléfono'],
            minlength: [9, "Introduce un teléfono correcto"]
        },
        imageUrl: {
            type: String,
        },
        // owner: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // }
    },
    {
        timestamps: true
    }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
