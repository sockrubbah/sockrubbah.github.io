window.onload = () => {
    class Pizza {
        constructor(name, image, ingredients, sauce, cheese, price) {
            this.name = name;
            this.image = image;
            this.ingredients = ingredients;
            this.sauce = sauce;
            this.cheese = cheese;
            this.price = price;
        }

        getSection() {
            const pizzaSection = document.createElement('div');
            pizzaSection.classList.add('pizza-section');

            const img = document.createElement('img');
            img.src = `images/${this.image}.jpg`;
            img.alt = this.name;

            const title = document.createElement('h3');
            title.textContent = this.name; // modal pizza title

            pizzaSection.addEventListener('click', () => this.showModal());
            pizzaSection.appendChild(title);
            pizzaSection.appendChild(img);

            return pizzaSection;
        }

        showModal() {
            const modal = document.querySelector('.modal');
            const pizzaDescription = document.querySelector('.modal-content');

            pizzaDescription.innerHTML = `
                <span class="close">&times;</span>
                <div class="modal-text">
                    <h2>${this.name}</h2>
                    <p><strong>Ingredients:</strong> ${this.ingredients}</p>
                    <p><strong>Sauce:</strong> ${this.sauce}</p>
                    <p><strong>Cheese:</strong> ${this.cheese}</p>
                    <p><strong>Price:</strong> $${this.price}</p>
                </div>
                <img src="images/${this.image}.jpg" alt="${this.name}">
            `; // Pizza description

            modal.style.display = "flex";

            document.querySelector('.close').addEventListener('click', () => {
                modal.style.display = "none"; // reset modal so a different pizza can be displayed
            });
        }
    }

    const pizzas = [
        new Pizza("Hawaiian", "hawaiian", "Pineapple, Ham", "Tomato Sauce", "Mozzarella", "15.99"),
        new Pizza("Seafood", "seafood", "Shrimp, Clams, Sea Urchins", "Garlic Sauce", "Mozzarella", "18.99"),
        new Pizza("Margherita", "margherita", "Tomatoes, Basil, Ketchup", "Tomato Sauce", "Mozzarella", "12.99"),
        new Pizza("Pepperoni", "pepperoni", "Pepperoni, Tomatoes, Pink Himilayan Salt", "Tomato Sauce", "Mozzarella", "14.99"),
        new Pizza("Veggie", "veggie", "Ghost Peppers, Olives, Mushrooms", "Garlic Butter", "Feta", "13.99"),
    ];

    const pizzaBar = document.querySelector('.pizza-bar');
    pizzas.forEach(pizza => pizzaBar.appendChild(pizza.getSection()));

    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.modal').style.display = "none";
    });
};
