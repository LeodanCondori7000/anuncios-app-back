const { Ad } = require("../db"); // Import the Ad model

async function populateAd() {
  try {
    const ads = await Ad.bulkCreate([
      {
        body: "vendo auto daewo del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 2,
      },
      {
        body: "vendo auto nissan del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 2,
      },
      {
        body: "vendo auto datsun del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 1,
      },
      {
        body: "vendo auto wolksvagen del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 1,
      },
      {
        body: "vendo auto honda del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 2,
      },
      {
        body: "vendo auto mazda del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 3,
      },
      {
        body: "vendo auto bugati del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 3,
      },
      {
        body: "vendo auto ferrari del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 2,
      },
      {
        body: "vendo auto maclaren del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 2,
      },
      {
        body: "vendo auto lamborgini del año 2005 usado operativo y en buen estado, 2.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 2,
      },
      {
        body: "vendo terreno 3000 m2 en la zona norte de Arequipa, buena ubicación. 2000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 2,
        userId: 1,
      },
      {
        body: "vendo auto toyota tercel del año 2000 usado operativo y en buena condición, 5.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 1,
        userId: 3,
      },
      {
        body: "Hotel D.B. Huanta - Ayacucho Requiere personal 01 Asistente Administrativo. Contacto 958333105",
        creationDate: new Date(),
        categoryId: 3,
        userId: 2,
      },
      {
        body: "Hotel D.B. Espinar - Cusco Requiere personal 01 Asistente Administrativo. Contacto 958333105",
        creationDate: new Date(),
        categoryId: 3,
        userId: 2,
      },
      {
        body: "Hotel D.B. Mollendo - Arequipa Requiere personal 01 Asistente Administrativo. Contacto 958333105",
        creationDate: new Date(),
        categoryId: 3,
        userId: 2,
      },
      {
        body: "Hotel D.B. Pisco - Ica Requiere personal 01 Asistente Administrativo. Contacto 958333105",
        creationDate: new Date(),
        categoryId: 3,
        userId: 2,
      },
      {
        body: "Hotel D.B. Tarma - Junin Requiere personal 01 Asistente Administrativo. Contacto 958333105",
        creationDate: new Date(),
        categoryId: 3,
        userId: 2,
      },
      {
        body: "Hotel D.B. Ilo - Moquegua Requiere personal 01 Asistente Administrativo. Contacto 958333105",
        creationDate: new Date(),
        categoryId: 3,
        userId: 2,
      },
      {
        body: "requiero conductor con experiencia en caja Volvo para reparto de mercadería consumo masivo licencia categoría A3B , A3C llamar 961907751",
        creationDate: new Date(),
        categoryId: 3,
        userId: 3,
      },
      {
        body: "necesito conductor con experiencia y licencia mínima AIIb ,llamar 961907751",
        creationDate: new Date(),
        categoryId: 3,
        userId: 3,
      },
      {
        body: "alquilo inmueble en la zona norte de Arequipa, salida Cuzco, Ideal para tienda o restaurante. 1.000.000$ Contacto 958333105",
        creationDate: new Date(),
        categoryId: 2,
        userId: 3,
      },
      {
        body: "necesito albañil para enchapar mi cas, de preferencia vivir por Paucarpata llamar 961907751",
        creationDate: new Date(),
        categoryId: 2,
        userId: 3,
      },
      {
        body: "deseo comprar un auto usado, station wagon del año 2000 en adelante y en buen estado. 3.000.000$ llamar 961907751",
        creationDate: new Date(),
        categoryId: 1,
        userId: 3,
      },
    ]);
    console.log("Ad table populated successfully");
  } catch (error) {
    console.error("Error populating Ad table:", error);
  }
}

module.exports = populateAd;
