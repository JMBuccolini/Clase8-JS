const d = document,
    $section = d.createElement('section'),
    $fragment = d.createDocumentFragment();

fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.results.map(personaje => {
            const $figure = d.createElement('figure'),
                $img = d.createElement('img'),
                $figcaption = d.createElement('figcaption'),
                $h3 = d.createElement('h3'),
                $p = d.createElement('p');

            $img.setAttribute('src', personaje.image)
            $img.setAttribute('alt', personaje.name)
            $img.setAttribute('width', '200px')
            $img.setAttribute('height', '220px')
            $h3.textContent = personaje.name
            $p.textContent = `Especie: ${personaje.species}`
            $figure.style.border = '2px solid black'
            $figure.style.width = "200px"
            $figure.style.display = "flex"
            $figure.style.flexDirection = "column"
            $figure.style.alignItems = "center"
            $figure.style.textAlign = "center"
            $img.style.objectFit = 'cover'

            $figure.appendChild($img);
            $figure.appendChild($figcaption);
            $figcaption.appendChild($h3);
            $figcaption.appendChild($p)

            $fragment.appendChild($figure);
        })
        $section.appendChild($fragment);
        $section.style.display = "flex";
        $section.style.flexWrap = "wrap";

        d.body.appendChild($section)
    }
    );
