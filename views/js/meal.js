const goalSlider = document.getElementById("goalSlider");
const dietSlider = document.getElementById("dietSlider");
const dietTypeWrapper = document.getElementById("dietTypeWrapper");
const mealCardsContainer = document.getElementById("mealCards");

// Dummy meal data for each diet (16 x 3)
const meals = {
    veg: [
      {
        name: "Paneer Bowl",
        kcal: 400,
        protein: 25,
        fat: 12,
        fibre: 4,
        img: "views/food/paneer.jpeg",
        tag: "Veg",
        req: "• 200g paneer (cubed)\n• 1 red bell pepper (sliced)\n• 1 onion (sliced)\n• 1 tbsp olive oil\n• ½ tsp cumin seeds\n• ½ tsp turmeric\n• 1 tsp garam masala\n• Salt and pepper to taste\n• Fresh coriander for garnish",
        steps: "1. Cut paneer, bell pepper, and onion.\n2. Heat oil in a pan, add cumin seeds.\n3. Sauté onions till golden, add peppers.\n4. Cook for 3 mins, add paneer.\n5. Add turmeric, garam masala, salt, and pepper.\n6. Cook till paneer is slightly crisp.\n7. Garnish with coriander and serve hot."
      },
      {
        name: "Veg Salad",
        kcal: 800,
        protein: 22,
        fat: 10,
        fibre: 6,
        img: "views/food/salad.jpeg",
        tag: "Veg",
        req: "• 2 cups lettuce (chopped)\n• 1 cucumber (sliced)\n• 1 tomato (diced)\n• ½ cup corn kernels\n• 2 tbsp olive oil\n• 1 tbsp lemon juice\n• Salt and black pepper",
        steps: "1. Wash and chop all vegetables.\n2. Toss lettuce, cucumber, tomato, and corn in a bowl.\n3. In a small bowl, mix olive oil, lemon juice, salt, and pepper.\n4. Pour dressing over salad.\n5. Toss gently and serve immediately."
      },
      {
        name: "Chickpea Stir Fry",
        kcal: 1000,
        protein: 28,
        fat: 14,
        fibre: 8,
        img: "views/food/chickpea.jpeg",
        tag: "Veg",
        req: "• 1 cup boiled chickpeas\n• 1 onion (chopped)\n• 2 cloves garlic (minced)\n• 1 cup spinach\n• 1 tbsp olive oil\n• 1 tsp cumin\n• ½ tsp chili flakes\n• Salt to taste",
        steps: "1. Heat oil, sauté garlic and onion.\n2. Add chickpeas and stir-fry for 3–4 mins.\n3. Add cumin, chili flakes, and salt.\n4. Toss in spinach and cook until wilted.\n5. Serve hot with lemon juice."
      },
      {
        name: "Veggie Pasta",
        kcal: 1500,
        protein: 20,
        fat: 18,
        fibre: 7,
        img: "views/food/veg-pasta.jpeg",
        tag: "Veg",
        req: "• 1 cup whole wheat pasta\n• 1 zucchini (sliced)\n• 1 tomato (chopped)\n• 2 tbsp olive oil\n• ¼ cup grated cheese\n• ½ tsp oregano\n• Salt and pepper",
        steps: "1. Boil pasta and drain.\n2. Sauté zucchini and tomato in olive oil.\n3. Add oregano, salt, and pepper.\n4. Mix pasta with vegetables.\n5. Sprinkle cheese and serve hot."
      },
      {
        name: "Tofu Stir Fry",
        kcal: 450,
        protein: 30,
        fat: 15,
        fibre: 5,
        img: "views/food/tofu.jpeg",
        tag: "Veg",
        req: "• 200g firm tofu (cubed)\n• 1 bell pepper (sliced)\n• 2 cloves garlic (minced)\n• 1 inch ginger (grated)\n• 1 tbsp soy sauce\n• 1 tbsp sesame oil",
        steps: "1. Press tofu to remove water.\n2. Heat oil, sauté garlic and ginger.\n3. Add tofu and cook until golden.\n4. Add bell pepper and soy sauce.\n5. Cook for 2–3 mins and serve."
      },
      {
        name: "Mushroom Risotto",
        kcal: 600,
        protein: 15,
        fat: 20,
        fibre: 3,
        img: "views/food/risotto.jpeg",
        tag: "Veg",
        req: "• 1 cup arborio rice\n• 1 cup mushrooms (sliced)\n• 1 onion (finely chopped)\n• 3 cups vegetable broth\n• 2 tbsp olive oil\n• ¼ cup parmesan cheese",
        steps: "1. Sauté onion and mushrooms in oil.\n2. Add rice and stir for 2 mins.\n3. Add broth gradually, stirring constantly.\n4. Cook until rice is tender and creamy.\n5. Stir in parmesan and serve."
      },
      {
        name: "Stuffed Bell Peppers",
        kcal: 550,
        protein: 18,
        fat: 12,
        fibre: 6,
        img: "views/food/stuffed-peppers.jpeg",
        tag: "Veg",
        req: "• 2 large bell peppers\n• ½ cup cooked quinoa\n• ½ cup black beans\n• ¼ cup corn\n• ¼ cup shredded cheese\n• Salt, cumin, paprika",
        steps: "1. Cut tops and core bell peppers.\n2. Mix quinoa, beans, corn, spices, and cheese.\n3. Stuff mixture into peppers.\n4. Bake at 180°C for 25 mins.\n5. Serve warm."
      },
      {
        name: "Spinach Lasagna",
        kcal: 700,
        protein: 25,
        fat: 22,
        fibre: 4,
        img: "views/food/lasagna.jpeg",
        tag: "Veg",
        req: "• 6 lasagna sheets\n• 2 cups spinach (sautéed)\n• ½ cup ricotta cheese\n• 1 cup marinara sauce\n• ½ cup mozzarella cheese",
        steps: "1. Cook lasagna sheets.\n2. Layer sheets with ricotta, spinach, and sauce.\n3. Repeat layers and top with mozzarella.\n4. Bake at 180°C for 25–30 mins.\n5. Let cool slightly before serving."
      },
      {
        name: "Vegetable Curry",
        kcal: 500,
        protein: 12,
        fat: 18,
        fibre: 5,
        img: "views/food/veg-curry.jpeg",
        tag: "Veg",
        req: "• 2 cups mixed vegetables\n• 1 cup coconut milk\n• 1 onion (chopped)\n• 2 cloves garlic\n• 1 tbsp curry powder",
        steps: "1. Sauté onion and garlic.\n2. Add vegetables and cook 5 mins.\n3. Add curry powder and mix.\n4. Pour coconut milk, simmer until tender.\n5. Serve hot with rice."
      },
      {
        name: "Grilled Veggie Sandwich",
        kcal: 400,
        protein: 10,
        fat: 12,
        fibre: 3,
        img: "views/food/veggie-sandwich.jpeg",
        tag: "Veg",
        req: "• 2 slices whole grain bread\n• 1 zucchini, 1 eggplant, 1 bell pepper (grilled)\n• 2 tbsp hummus\n• Salt and pepper",
        steps: "1. Grill sliced veggies.\n2. Toast bread slices.\n3. Spread hummus on one slice.\n4. Layer veggies, season, and close sandwich.\n5. Slice and serve."
      },
      {
        name: "Lentil Soup",
        kcal: 350,
        protein: 20,
        fat: 8,
        fibre: 6,
        img: "views/food/lentil-soup.jpeg",
        tag: "Veg",
        req: "• 1 cup lentils\n• 1 carrot (chopped)\n• 1 celery stick (chopped)\n• 1 onion\n• 3 cups vegetable broth\n• Salt, pepper, cumin",
        steps: "1. Sauté onion, carrot, and celery.\n2. Add lentils and stir.\n3. Pour broth, add spices.\n4. Simmer for 25–30 mins.\n5. Serve hot."
      },
      {
        name: "Caprese Salad",
        kcal: 300,
        protein: 12,
        fat: 20,
        fibre: 2,
        img: "views/food/caprese.jpeg",
        tag: "Veg",
        req: "• 2 tomatoes (sliced)\n• 100g fresh mozzarella (sliced)\n• Fresh basil leaves\n• 1 tbsp olive oil\n• 1 tsp balsamic vinegar\n• Salt and pepper",
        steps: "1. Arrange tomato and mozzarella slices alternately.\n2. Add basil leaves.\n3. Drizzle with oil and vinegar.\n4. Season and serve fresh."
      },
      {
        name: "Vegetable Stir Fry",
        kcal: 400,
        protein: 15,
        fat: 10,
        fibre: 4,
        img: "views/food/veg-stirfry.jpeg",
        tag: "Veg",
        req: "• 2 cups mixed veggies\n• 1 tbsp soy sauce\n• 1 tsp sesame oil\n• 2 cloves garlic\n• 1 inch ginger",
        steps: "1. Heat sesame oil.\n2. Add garlic and ginger.\n3. Stir in veggies and sauté.\n4. Add soy sauce and cook 2–3 mins.\n5. Serve hot."
      },
      {
        name: "Eggplant Parmesan",
        kcal: 650,
        protein: 18,
        fat: 25,
        fibre: 5,
        img: "views/food/eggplant-parm.jpeg",
        tag: "Veg",
        req: "• 1 eggplant\n• 1 cup marinara sauce\n• ½ cup mozzarella\n• ¼ cup parmesan\n• ½ cup breadcrumbs\n• Olive oil",
        steps: "1. Slice and salt eggplant, rest for 15 mins.\n2. Dip in breadcrumbs and fry.\n3. Layer eggplant, sauce, and cheese.\n4. Bake at 180°C for 20 mins.\n5. Serve warm."
      },
      {
        name: "Vegetable Quesadilla",
        kcal: 500,
        protein: 20,
        fat: 22,
        fibre: 4,
        img: "views/food/veg-quesadilla.jpeg",
        tag: "Veg",
        req: "• 2 tortillas\n• 1 bell pepper\n• 1 onion\n• ½ cup shredded cheese\n• 2 tbsp salsa",
        steps: "1. Sauté peppers and onions.\n2. Place mix on one tortilla with cheese.\n3. Cover with second tortilla.\n4. Cook on skillet until golden on both sides.\n5. Slice and serve with salsa."
      },
      {
        name: "Broccoli Cheddar Soup",
        kcal: 550,
        protein: 15,
        fat: 30,
        fibre: 3,
        img: "views/food/broccoli.jpeg",
        tag: "Veg",
        req: "• 2 cups broccoli (chopped)\n• 1 onion\n• 1 tbsp flour\n• 1 cup milk\n• ½ cup cheddar cheese\n• 1 tbsp butter",
        steps: "1. Sauté onion in butter.\n2. Add broccoli and cook for 5 mins.\n3. Stir in flour.\n4. Pour milk, cook till thick.\n5. Add cheese and stir till melted.\n6. Serve warm."
      }

    ],
  
    nonveg: [
      {
        name: "Grilled Chicken Bowl",
        kcal: 400,
        protein: 35,
        fat: 10,
        fibre: 3,
        img: "views/food/grilled-chicken.jpeg",
        tag: "Non-Veg",
        req: "200g chicken breast, 1 tbsp olive oil, 2 garlic cloves (minced), 1 tsp black pepper, 1/2 tsp salt, 1 cup mixed greens",
        steps: "1. Marinate chicken breast with olive oil, garlic, salt, and pepper for 15 mins. 2. Heat grill pan on medium-high. 3. Grill chicken 6-7 minutes on each side until cooked. 4. Toss greens with a drizzle of olive oil. 5. Slice grilled chicken thinly. 6. Arrange over greens and serve warm."
      },
      {
        name: "Chicken & Rice Power Bowl",
        kcal: 800,
        protein: 40,
        fat: 18,
        fibre: 4,
        img: "views/food/chicken-rice.jpeg",
        tag: "Non-Veg",
        req: "1 cup cooked brown rice, 200g diced chicken breast, 1 tbsp soy sauce, 1/2 cup broccoli florets, 1/2 cup bell peppers (sliced), 1 tsp sesame seeds",
        steps: "1. Cook brown rice and set aside. 2. Stir-fry chicken in a pan with soy sauce until browned. 3. Add broccoli and peppers, stir-fry 5-6 mins until tender. 4. Place rice in a bowl, top with chicken-veggie mix. 5. Sprinkle sesame seeds and serve."
      },
      {
        name: "Spicy Tandoori Chicken",
        kcal: 1000,
        protein: 45,
        fat: 22,
        fibre: 5,
        img: "views/food/tandoori.jpeg",
        tag: "Non-Veg",
        req: "2 chicken legs, 1/2 cup yogurt, 1 tbsp tandoori masala, 1 tbsp lemon juice, 1 tsp garlic paste, 1 tbsp butter",
        steps: "1. Combine yogurt, lemon juice, tandoori masala, and garlic paste. 2. Coat chicken and marinate for 2+ hours. 3. Preheat oven to 200°C. 4. Bake for 25 mins, basting with butter. 5. Broil 5 more mins for char. 6. Serve with onion rings and lemon."
      },
      {
        name: "Salmon with Quinoa",
        kcal: 1500,
        protein: 48,
        fat: 30,
        fibre: 6,
        img: "views/food/salmon-quinoa.jpeg",
        tag: "Non-Veg",
        req: "200g salmon fillet, 1/2 cup quinoa, 1 tbsp olive oil, 1 tbsp lemon juice, 1 tsp dried herbs (thyme/oregano)",
        steps: "1. Rinse and cook quinoa in 1 cup water. 2. Season salmon with herbs, lemon, salt. 3. Pan-sear salmon 5 mins per side. 4. Drizzle olive oil on quinoa. 5. Plate salmon with quinoa. 6. Serve hot with lemon wedges."
      },
      {
        name: "Turkey Wrap",
        kcal: 400,
        protein: 32,
        fat: 12,
        fibre: 3,
        img: "views/food/turkey-wrap.jpeg",
        tag: "Non-Veg",
        req: "1 whole wheat wrap, 150g turkey breast (sliced), 2 lettuce leaves, 3 slices tomato, 2 tbsp hummus",
        steps: "1. Lightly toast the wrap. 2. Spread hummus evenly. 3. Add turkey, lettuce, tomato. 4. Roll tightly and slice in half. 5. Serve fresh or wrap in foil for later."
      },
      {
        name: "Beef Stir Fry",
        kcal: 800,
        protein: 42,
        fat: 22,
        fibre: 4,
        img: "views/food/beef-stir.jpeg",
        tag: "Non-Veg",
        req: "200g beef strips, 1 tbsp soy sauce, 1 tsp minced ginger, 1/2 cup broccoli, 1 tsp sesame oil",
        steps: "1. Marinate beef in soy sauce and ginger for 20 mins. 2. Heat sesame oil in wok. 3. Stir-fry beef until browned. 4. Add broccoli, cook 5 mins. 5. Serve hot, optionally over rice or noodles."
      },
      {
        name: "Fish Curry & Rice",
        kcal: 1000,
        protein: 38,
        fat: 28,
        fibre: 5,
        img: "views/food/fish-curry.jpeg",
        tag: "Non-Veg",
        req: "200g firm fish, 1 cup coconut milk, 2 tsp curry powder, 1 onion (sliced), 1 cup cooked rice",
        steps: "1. Sauté onions in oil until translucent. 2. Add curry powder, stir 1 min. 3. Add coconut milk and fish. 4. Simmer 15 mins. 5. Serve over hot rice. 6. Garnish with chopped cilantro."
      },
      {
        name: "Chicken Caesar Salad",
        kcal: 1500,
        protein: 40,
        fat: 35,
        fibre: 6,
        img: "views/food/chicken-caesar.jpeg",
        tag: "Non-Veg",
        req: "150g grilled chicken breast, 2 cups romaine lettuce, 1/4 cup croutons, 2 tbsp Caesar dressing, 1 tbsp grated parmesan",
        steps: "1. Slice grilled chicken. 2. Toss lettuce with Caesar dressing. 3. Add chicken, croutons. 4. Sprinkle parmesan. 5. Chill 10 mins before serving."
      },
      {
        name: "Egg & Chicken Burrito",
        kcal: 400,
        protein: 36,
        fat: 14,
        fibre: 4,
        img: "views/food/burrito.jpeg",
        tag: "Non-Veg",
        req: "2 eggs, 100g chicken (cooked), 1 tortilla, 1/4 cup chopped veggies, 2 tbsp cheese",
        steps: "1. Scramble eggs and cook. 2. Shred chicken. 3. Warm tortilla. 4. Layer eggs, chicken, veggies, cheese. 5. Roll tightly. 6. Toast on pan 1 min each side."
      },
      {
        name: "Chicken Kebab Platter",
        kcal: 800,
        protein: 42,
        fat: 18,
        fibre: 5,
        img: "views/food/kebab.jpeg",
        tag: "Non-Veg",
        req: "200g chicken breast (cubed), 1/4 cup yogurt, 1 tsp garlic paste, skewers, 1 cup grilled vegetables",
        steps: "1. Marinate chicken with yogurt and garlic. 2. Skewer chicken. 3. Grill for 10-12 mins, turning halfway. 4. Grill veggies separately. 5. Serve on a platter with lemon."
      },
      {
        name: "Mutton Stew",
        kcal: 1000,
        protein: 44,
        fat: 30,
        fibre: 6,
        img: "views/food/mutton-stew.jpeg",
        tag: "Non-Veg",
        req: "300g mutton pieces, 1 potato (cubed), 1 carrot (sliced), 2 garlic cloves, mixed spices",
        steps: "1. Brown mutton in a heavy pot. 2. Add garlic and spices. 3. Pour water and simmer 45 mins. 4. Add potato, carrot. 5. Simmer until soft. 6. Serve hot with bread or rice."
      },
      {
        name: "Chicken Tikka Bowl",
        kcal: 1500,
        protein: 50,
        fat: 28,
        fibre: 5,
        img: "views/food/tikka-bowl.jpeg",
        tag: "Non-Veg",
        req: "200g chicken tikka, 1 cup cooked basmati rice, 2 tbsp mint chutney, sliced onions",
        steps: "1. Cook and slice chicken tikka. 2. Prepare rice. 3. In a bowl, add rice, then tikka. 4. Add onions. 5. Drizzle with chutney. 6. Serve hot."
      },
      {
        name: "Shrimp Rice Bowl",
        kcal: 400,
        protein: 33,
        fat: 10,
        fibre: 3,
        img: "views/food/shrimp-rice.jpeg",
        tag: "Non-Veg",
        req: "150g shrimp, 2 garlic cloves, 1 tsp lemon juice, 1 cup cooked rice, 1/4 cup peas",
        steps: "1. Sauté garlic, then shrimp until pink. 2. Add lemon juice. 3. Stir in peas with hot rice. 4. Mix shrimp and rice. 5. Season and serve warm."
      },
      {
        name: "Chicken Masala Wrap",
        kcal: 800,
        protein: 38,
        fat: 20,
        fibre: 4,
        img: "views/food/masala-wrap.jpeg",
        tag: "Non-Veg",
        req: "150g cooked chicken, 1/4 cup masala gravy, 1 roti, sliced onions",
        steps: "1. Heat chicken in masala gravy. 2. Warm roti. 3. Spread mix on roti, add onions. 4. Roll tightly. 5. Grill lightly. 6. Cut and serve."
      },
      {
        name: "Fish Tikka",
        kcal: 1000,
        protein: 42,
        fat: 22,
        fibre: 4,
        img: "views/food/fish-tikka.jpeg",
        tag: "Non-Veg",
        req: "200g fish cubes, 2 tbsp tikka masala, 1 tbsp lemon juice, skewers",
        steps: "1. Marinate fish in tikka masala and lemon. 2. Skewer and grill 10-15 mins. 3. Serve with dip and salad."
      },
      {
        name: "Beef Bowl with Hummus",
        kcal: 1500,
        protein: 50,
        fat: 35,
        fibre: 6,
        img: "views/food/beef-hummus.jpeg",
        tag: "Non-Veg",
        req: "200g beef mince, 2 tbsp hummus, pita bread, lettuce leaves, spices",
        steps: "1. Cook beef with salt, pepper, and cumin. 2. Spread hummus on pita. 3. Add lettuce and beef. 4. Roll and toast lightly. 5. Slice and serve."
      }
    ],       
    egg: [ 
      {
        name: "Masala Omelette",
        kcal: 400,
        protein: 20,
        fat: 14,
        fibre: 2,
        img: "views/food/egg-omelette.jpeg",
        tag: "Egg",
        req: "2 eggs, 1 small onion (chopped), 1 small tomato (chopped), 1 green chili (chopped), 1/4 tsp turmeric, 1/4 tsp red chili powder, salt to taste, fresh coriander, 1 tsp oil",
        steps: "1. Crack eggs into a bowl and whisk them well. 2. Add chopped onion, tomato, green chili, turmeric, red chili powder, salt, and coriander. Mix thoroughly. 3. Heat oil in a non-stick pan. 4. Pour the egg mixture and spread evenly. 5. Cook for 2–3 minutes until the base is golden, then flip and cook the other side. 6. Serve hot with toast or a green salad."
      },
      {
        name: "Boiled Egg Chaat",
        kcal: 800,
        protein: 28,
        fat: 20,
        fibre: 4,
        img: "views/food/Egg Chaat.jpeg",
        tag: "Egg",
        req: "4 hard-boiled eggs, 1 small onion (chopped), 1 tomato (chopped), 1/2 tsp chaat masala, juice of 1/2 lemon, salt to taste, fresh coriander leaves",
        steps: "1. Cut the boiled eggs into halves or quarters. 2. In a bowl, mix chopped onion, tomato, and salt. 3. Add chaat masala and lemon juice. 4. Gently toss the boiled eggs with the mixture. 5. Garnish with chopped coriander leaves. 6. Serve fresh as a spicy egg snack."
      },
      {
        name: "Egg Bhurji",
        kcal: 1000,
        protein: 35,
        fat: 22,
        fibre: 5,
        img: "views/food/egg-bhurji.jpeg",
        tag: "Egg",
        req: "3 eggs, 1 onion (finely chopped), 1 tomato (finely chopped), 1 green chili, 1/2 tsp turmeric, 1/2 tsp red chili powder, salt, 1 tbsp oil, coriander leaves",
        steps: "1. Heat oil in a pan. 2. Sauté chopped onions until translucent. 3. Add tomato and green chili. Cook for 2–3 minutes. 4. Add turmeric, chili powder, and salt. Mix well. 5. Crack the eggs into the pan and quickly scramble everything together. 6. Cook until eggs are done. 7. Garnish with coriander and serve with toast or roti."
      },
      {
        name: "Egg Fried Rice",
        kcal: 1500,
        protein: 30,
        fat: 25,
        fibre: 6,
        img: "views/food/egg-fried-rice.jpeg",
        tag: "Egg",
        req: "1 cup cooked basmati rice, 2 eggs, 1/4 cup carrots, 1/4 cup beans, 1 tbsp soy sauce, 1 tsp vinegar, salt, pepper, 1 tbsp oil",
        steps: "1. Scramble eggs in a hot pan and keep aside. 2. In the same pan, heat oil and sauté carrots and beans for 3–4 minutes. 3. Add cooked rice, soy sauce, vinegar, salt, and pepper. Stir-fry for 2 minutes. 4. Add the scrambled eggs back into the pan and mix well. 5. Stir-fry for another minute. 6. Serve hot with chili sauce."
      },
      {
        name: "Egg Curry",
        kcal: 400,
        protein: 26,
        fat: 16,
        fibre: 4,
        img: "views/food/egg-curry.jpeg",
        tag: "Egg",
        req: "3 hard-boiled eggs, 1 onion (finely chopped), 1 tomato (pureed), 1 tsp ginger-garlic paste, 1/2 tsp turmeric, 1 tsp garam masala, 1/2 tsp chili powder, salt, 1 tbsp oil",
        steps: "1. Heat oil and sauté onions till golden. 2. Add ginger-garlic paste and sauté till raw smell goes. 3. Add tomato puree, turmeric, chili powder, and salt. Cook until oil separates. 4. Add 1/2 cup water and bring to boil. 5. Add eggs and simmer for 10 minutes. 6. Sprinkle garam masala and garnish with coriander. Serve with rice or roti."
      },
      {
        name: "Egg Wrap",
        kcal: 800,
        protein: 27,
        fat: 18,
        fibre: 5,
        img: "views/food/egg-wrap.jpeg",
        tag: "Egg",
        req: "1 large egg, 1 whole wheat wrap, shredded lettuce, julienned cucumber, onion, sauces (mayo, mustard), 1 tsp oil",
        steps: "1. Scramble and cook egg in a pan with minimal oil. 2. Heat wrap on the same pan for 30 seconds. 3. Place egg, lettuce, cucumber, and onions on the wrap. 4. Drizzle sauces. 5. Roll the wrap tightly and toast it lightly on the pan. 6. Slice diagonally and serve."
      },
      {
        name: "Deviled Eggs",
        kcal: 1000,
        protein: 32,
        fat: 22,
        fibre: 3,
        img: "views/food/deviled-eggs.jpeg",
        tag: "Egg",
        req: "6 boiled eggs, 2 tbsp mayonnaise, 1 tsp mustard, paprika, salt, pepper, fresh herbs",
        steps: "1. Cut eggs in half lengthwise. 2. Remove yolks and mash them in a bowl. 3. Mix yolks with mayo, mustard, salt, and pepper until creamy. 4. Spoon or pipe the mixture back into the egg whites. 5. Sprinkle paprika and herbs. 6. Chill and serve."
      },
      {
        name: "Poached Eggs with Spinach",
        kcal: 1500,
        protein: 33,
        fat: 24,
        fibre: 7,
        img: "views/food/poached-spinach.jpeg",
        tag: "Egg",
        req: "2 eggs, 1 cup spinach, 1 garlic clove (chopped), 1 tsp vinegar, salt, pepper, 1 tsp olive oil",
        steps: "1. Sauté garlic in olive oil, then add spinach. Cook until wilted. 2. Boil water with vinegar. 3. Crack eggs into simmering water and poach for 3–4 mins. 4. Drain eggs on paper towel. 5. Plate spinach, place poached eggs on top. 6. Season with salt, pepper and serve."
      },
      {
        name: "Egg Toast",
        kcal: 400,
        protein: 19,
        fat: 12,
        fibre: 2,
        img: "views/food/egg-toast.jpeg",
        tag: "Egg",
        req: "2 eggs, 2 slices whole wheat bread, salt, pepper, butter, optional cheese",
        steps: "1. Beat eggs with salt and pepper. 2. Dip each bread slice in egg mix. 3. Heat butter on pan and toast each side till golden. 4. Optionally, place cheese on top and melt slightly. 5. Serve hot with ketchup or herbs."
      },
      {
        name: "Egg White Scramble",
        kcal: 800,
        protein: 30,
        fat: 10,
        fibre: 4,
        img: "views/food/egg-white-scramble.jpeg",
        tag: "Egg",
        req: "4 egg whites, 1/4 cup spinach, 1/4 cup bell peppers (diced), salt, pepper, 1 tsp olive oil",
        steps: "1. Sauté bell peppers and spinach in oil. 2. Add whisked egg whites and scramble. 3. Cook till fluffy and dry. 4. Season with salt and pepper. 5. Serve with toast or avocado."
      },
      {
        name: "Spicy Egg Sandwich",
        kcal: 1000,
        protein: 28,
        fat: 20,
        fibre: 5,
        img: "views/food/egg-sandwich.jpeg",
        tag: "Egg",
        req: "2 eggs, 2 bread slices, 1 tbsp mayo, 1/4 tsp chili flakes, butter",
        steps: "1. Scramble eggs with chili flakes and salt. 2. Toast bread with butter. 3. Spread mayo on one slice. 4. Place scrambled egg filling. 5. Cover with other bread slice. 6. Grill or toast sandwich and serve hot."
      },
      {
        name: "Egg Dosa",
        kcal: 1500,
        protein: 32,
        fat: 18,
        fibre: 6,
        img: "views/food/egg-dosa.jpeg",
        tag: "Egg",
        req: "1 cup dosa batter, 1 egg, salt, pepper, oil",
        steps: "1. Pour batter on hot tawa and spread like dosa. 2. Crack egg on top, spread it evenly. 3. Add salt and pepper. 4. Cook until crispy. 5. Flip carefully and cook other side. 6. Serve with chutney or sambar."
      },
      {
        name: "Stuffed Egg Paratha",
        kcal: 400,
        protein: 25,
        fat: 15,
        fibre: 4,
        img: "views/food/egg-paratha.jpeg",
        tag: "Egg",
        req: "Wheat dough, 2 scrambled eggs, chopped onion, green chili, coriander, oil, spices",
        steps: "1. Mix scrambled eggs with onion, chili, coriander, salt, and pepper. 2. Roll dough into small disc. 3. Place filling in center, fold and seal edges. 4. Roll again gently. 5. Cook on both sides with oil until golden. 6. Serve hot with curd or pickle."
      },
      {
        name: "Egg Maggi",
        kcal: 800,
        protein: 20,
        fat: 16,
        fibre: 5,
        img: "views/food/egg-maggi.jpeg",
        tag: "Egg",
        req: "1 pack Maggi noodles, 1 egg, 1/4 cup chopped veggies, water, masala",
        steps: "1. Cook Maggi with water and masala. 2. Add chopped veggies. 3. When half done, crack egg into it. 4. Stir continuously to scramble. 5. Cook until egg and noodles are fully done. 6. Serve hot."
      },
      {
        name: "Egg Roll",
        kcal: 1000,
        protein: 30,
        fat: 22,
        fibre: 5,
        img: "views/food/egg-roll.jpeg",
        tag: "Egg",
        req: "1 egg, 1 paratha, onion slices, sauce, green chutney, chaat masala",
        steps: "1. Cook beaten egg in pan. 2. Place paratha on top and cook together. 3. Flip, add onion, sauces, and sprinkle chaat masala. 4. Roll and wrap in foil. 5. Serve hot as a street-style snack."
      },
      {
        name: "Egg Pulao",
        kcal: 1500,
        protein: 32,
        fat: 20,
        fibre: 7,
        img: "views/food/egg-pulao.jpeg",
        tag: "Egg",
        req: "1 cup basmati rice, 3 boiled eggs, 1 onion, 1 bay leaf, 1/2 tsp cumin, 1 tsp garam masala, salt, oil",
        steps: "1. Heat oil, add cumin, bay leaf, and onions. 2. Cook until golden. 3. Add garam masala and rice. 4. Add water and salt, cook until rice is done. 5. Slice boiled eggs and add on top. 6. Cover and simmer for 5 minutes. Serve hot."
      }
    ],
    
    vegan: [
      {
        name: "Quinoa Veggie Bowl",
        kcal: 400,
        protein: 18,
        fat: 10,
        fibre: 6,
        img: "views/food/quinoa-bowl.jpeg",
        tag: "Vegan",
        req: "1 cup cooked quinoa, 1/2 cup black beans (cooked), 1/4 cup corn kernels, 5–6 cherry tomatoes, 1/2 avocado, 1 lime, salt and pepper to taste, chopped cilantro (optional)",
        steps: "1. Cook quinoa as per package instructions and let it cool. 2. Rinse and drain black beans and corn. 3. Halve cherry tomatoes and dice the avocado. 4. In a large bowl, combine quinoa, black beans, corn, and cherry tomatoes. 5. Add diced avocado on top. 6. Squeeze lime juice, season with salt and pepper, and garnish with chopped cilantro before serving."
      },
      {
        name: "Tofu Stir Fry",
        kcal: 800,
        protein: 24,
        fat: 14,
        fibre: 8,
        img: "views/food/tofu-stirfry.jpeg",
        tag: "Vegan",
        req: "200g firm tofu, 1 red bell pepper, 1 yellow bell pepper, 1 tbsp soy sauce, 1 tsp sesame oil, 2 cloves garlic (minced), 1/2 onion, 1 tsp cornstarch, oil for frying",
        steps: "1. Press tofu for 20 minutes, cut into cubes, and toss in a bit of cornstarch. 2. In a pan, heat oil and sauté minced garlic and chopped onion. 3. Add tofu cubes and fry until golden on all sides. 4. Slice bell peppers into strips and add to the pan. 5. Pour in soy sauce and sesame oil, stir-frying for 5–7 minutes until veggies are tender-crisp. 6. Serve hot with steamed rice or noodles."
      },
      {
        name: "Vegan Burrito",
        kcal: 1000,
        protein: 26,
        fat: 20,
        fibre: 9,
        img: "views/food/vegan-burrito.jpeg",
        tag: "Vegan",
        req: "1 large tortilla, 1/2 cup cooked rice, 1/2 cup black beans, 1/4 cup guacamole, 1/4 cup salsa, shredded lettuce, vegan cheese (optional)",
        steps: "1. Warm the tortilla on a pan. 2. Spread guacamole evenly in the center. 3. Layer rice, black beans, salsa, and shredded lettuce. 4. Add vegan cheese if desired. 5. Fold the sides, roll tightly into a burrito. 6. Toast it seam-side down on the pan for 2–3 minutes and serve."
      },
      {
        name: "Vegan Spaghetti",
        kcal: 1500,
        protein: 30,
        fat: 22,
        fibre: 10,
        img: "views/food/vegan-spaghetti.jpeg",
        tag: "Vegan",
        req: "200g whole wheat spaghetti, 1 cup tomato sauce, 1/2 cup sliced mushrooms, 2 cloves garlic, 1 tbsp olive oil, fresh basil or parsley, salt and pepper",
        steps: "1. Cook spaghetti until al dente and drain. 2. In a skillet, heat olive oil and sauté minced garlic and mushrooms until soft. 3. Add tomato sauce and simmer for 10 minutes. 4. Mix in cooked spaghetti, toss well. 5. Season with salt and pepper, garnish with chopped herbs, and serve hot."
      },
      {
        name: "Sweet Potato Bowl",
        kcal: 400,
        protein: 16,
        fat: 10,
        fibre: 7,
        img: "views/food/sweet-potato-bowl.jpeg",
        tag: "Vegan",
        req: "1 medium sweet potato, 1 cup kale, 1/2 cup cooked chickpeas, 2 tbsp tahini, 1 tsp lemon juice, olive oil, paprika, garlic powder, salt",
        steps: "1. Cube sweet potato, season with paprika, garlic powder, salt, and bake at 200°C for 25 minutes. 2. Massage kale with a little olive oil and lemon juice until soft. 3. Roast chickpeas with oil and spices for 20 minutes until crispy. 4. In a bowl, layer sweet potatoes, kale, and chickpeas. 5. Mix tahini and lemon juice with a splash of water for sauce. 6. Drizzle and serve."
      },
      {
        name: "Vegan Curry",
        kcal: 800,
        protein: 22,
        fat: 16,
        fibre: 8,
        img: "views/food/vegan-curry.jpeg",
        tag: "Vegan",
        req: "1 can coconut milk, 1 cup cooked chickpeas, 1 carrot, 1/2 cup green peas, 2 tbsp curry paste, 1 cup cooked rice, salt to taste, cilantro",
        steps: "1. Heat curry paste in a pot for 1 minute. 2. Add coconut milk and stir until combined. 3. Add chopped carrots, green peas, and chickpeas. 4. Simmer for 15–20 minutes until veggies are soft. 5. Adjust salt and serve over rice. 6. Garnish with chopped cilantro."
      },
      {
        name: "Lentil Soup",
        kcal: 1000,
        protein: 28,
        fat: 10,
        fibre: 12,
        img: "views/food/lentil-soup2.jpeg",
        tag: "Vegan",
        req: "1 cup lentils, 1 carrot, 2 celery stalks, 1 onion, 2 garlic cloves, 4 cups vegetable broth, 1 tbsp olive oil, bay leaf, thyme, salt, pepper",
        steps: "1. Heat oil in a pot, sauté garlic, onion, and celery until soft. 2. Add chopped carrots and rinsed lentils. 3. Pour in broth, add bay leaf and thyme. 4. Simmer for 30–40 minutes until lentils are soft. 5. Remove bay leaf and blend partially for texture. 6. Season and serve with bread."
      },
      {
        name: "Vegan Buddha Bowl",
        kcal: 1500,
        protein: 30,
        fat: 18,
        fibre: 10,
        img: "views/food/buddha-bowl.jpg",
        tag: "Vegan",
        req: "1 cup brown rice, 1 cup roasted seasonal vegetables, 2 tbsp hummus, 1/2 cucumber, 1 tbsp mixed seeds (sunflower, pumpkin), salt, pepper",
        steps: "1. Cook brown rice and let it cool slightly. 2. Roast chopped veggies (zucchini, carrots, broccoli) with olive oil, salt, and pepper at 200°C for 25 minutes. 3. Slice cucumber. 4. In a bowl, arrange rice, roasted veggies, and cucumber. 5. Add a spoonful of hummus. 6. Sprinkle seeds on top and serve."
      },
      {
        name: "Stuffed Bell Peppers",
        kcal: 400,
        protein: 18,
        fat: 8,
        fibre: 6,
        img: "views/food/stuffed-peppers2.jpeg",
        tag: "Vegan",
        req: "2 bell peppers, 1/2 cup cooked quinoa, 1/2 cup black beans, 1/4 cup corn, 1/4 cup tomato sauce, herbs, salt, pepper",
        steps: "1. Preheat oven to 180°C. Slice tops off bell peppers and remove seeds. 2. Mix quinoa, beans, corn, and tomato sauce in a bowl. 3. Season with herbs, salt, and pepper. 4. Fill peppers with the mixture and place in a baking dish. 5. Cover with foil and bake for 25 minutes. 6. Let cool slightly before serving."
      },
      {
        name: "Vegan Sushi",
        kcal: 800,
        protein: 20,
        fat: 10,
        fibre: 5,
        img: "views/food/vegan-sushi.jpeg",
        tag: "Vegan",
        req: "1 cup sushi rice, 2 sheets nori, 1/2 cucumber, 1/2 avocado, 1/2 carrot, rice vinegar, soy sauce",
        steps: "1. Cook sushi rice and mix with rice vinegar. Let it cool. 2. Cut cucumber, avocado, and carrot into thin strips. 3. Lay nori sheet on bamboo mat, spread rice evenly. 4. Arrange veggies in the center. 5. Roll tightly using the mat and slice into pieces. 6. Serve with soy sauce."
      },
      {
        name: "Chickpea Sandwich",
        kcal: 1000,
        protein: 25,
        fat: 14,
        fibre: 8,
        img: "views/food/chickpea-sandwich.jpeg",
        tag: "Vegan",
        req: "2 slices whole grain bread, 1/2 cup mashed chickpeas, 1 tbsp vegan mayo, lettuce, 2 tomato slices, mustard (optional), salt, pepper",
        steps: "1. Mash chickpeas with vegan mayo, salt, and pepper. 2. Toast bread slices lightly. 3. Spread chickpea mixture on one slice. 4. Add lettuce and tomato. 5. Top with second slice, cut in half. 6. Serve immediately."
      },
      {
        name: "Vegan Pancakes",
        kcal: 1500,
        protein: 22,
        fat: 20,
        fibre: 6,
        img: "views/food/vegan-pancakes.jpeg",
        tag: "Vegan",
        req: "1 cup flour, 1 banana, 1 tsp baking powder, 3/4 cup almond milk, 1 tbsp maple syrup, oil for cooking",
        steps: "1. Mash banana in a bowl. 2. Add flour, baking powder, and mix well. 3. Slowly add almond milk to form batter. 4. Heat non-stick pan with a bit of oil. 5. Pour batter and cook until bubbles form. Flip and cook other side. 6. Stack pancakes, drizzle syrup, and serve."
      },
      {
        name: "Avocado Toast",
        kcal: 400,
        protein: 16,
        fat: 12,
        fibre: 5,
        img: "views/food/avocado-toast.jpeg",
        tag: "Vegan",
        req: "2 slices bread, 1 avocado, juice of 1/2 lemon, pinch of chili flakes, salt, pepper",
        steps: "1. Toast bread to desired crispness. 2. Mash avocado with lemon juice, salt, and pepper. 3. Spread on toast slices. 4. Sprinkle chili flakes. 5. Serve immediately."
      },
      {
        name: "Vegan Wrap",
        kcal: 800,
        protein: 20,
        fat: 10,
        fibre: 7,
        img: "views/food/vegan-wrap.jpeg",
        tag: "Vegan",
        req: "1 whole grain wrap, 2 tbsp hummus, handful spinach, 1/4 cucumber, 1 tomato, 1/4 carrot, salt, pepper",
        steps: "1. Spread hummus over wrap evenly. 2. Layer with spinach, sliced cucumber, tomato, and shredded carrot. 3. Sprinkle with salt and pepper. 4. Roll wrap tightly and slice in half. 5. Secure with toothpicks and serve with dip."
      },
      {
        name: "Vegan Chili",
        kcal: 1000,
        protein: 26,
        fat: 16,
        fibre: 9,
        img: "views/food/vegan-chili.jpg",
        tag: "Vegan",
        req: "1 can kidney beans, 1 can crushed tomatoes, 1/2 onion, 2 garlic cloves, 1 tsp chili powder, 1/2 red bell pepper, salt, pepper, olive oil",
        steps: "1. Heat oil, sauté onion and garlic until fragrant. 2. Add chopped bell pepper, cook for 2 minutes. 3. Add beans and tomatoes. 4. Stir in chili powder, salt, and pepper. 5. Simmer for 25 minutes. 6. Serve hot with cornbread or rice."
      },
      {
        name: "Vegan Fried Rice",
        kcal: 1500,
        protein: 28,
        fat: 18,
        fibre: 7,
        img: "views/food/vegan-fried-rice.jpeg",
        tag: "Vegan",
        req: "2 cups cooked rice, 100g tofu, 1/4 cup peas, 1/4 cup diced carrots, 1 tbsp soy sauce, 1 tsp sesame oil, garlic, oil for frying",
        steps: "1. Cube tofu and fry until golden, set aside. 2. Sauté garlic in oil, add peas and carrots. 3. Add cooked rice and tofu. 4. Pour in soy sauce and stir well. 5. Drizzle sesame oil, toss everything. 6. Serve hot."
      }
    ]
  };    

// Goal mapping
const goalCombos = {
  cut: [0, 2],
  bulk: [2, 3],
  recomp: [1, 2],
  fatloss: [0, 1],
  maintain: [1, 3]
};

let selectedGoal = "";
let selectedDiet = "";

goalSlider.querySelectorAll("span").forEach(btn => {
  btn.onclick = () => {
    goalSlider.querySelectorAll("span").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedGoal = btn.dataset.goal;
    dietTypeWrapper.classList.remove("hidden");
  };
});

dietSlider.querySelectorAll("span").forEach(btn => {
  btn.onclick = () => {
    dietSlider.querySelectorAll("span").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDiet = btn.dataset.diet;
    displayCards();
  };
});
function displayCards() {
  mealCardsContainer.innerHTML = "";
  const combo = goalCombos[selectedGoal];
  const targetKcals = [400, 800, 1000, 1500];

  // Get target kcal values for the goal
  const target1 = targetKcals[combo[0]];
  const target2 = targetKcals[combo[1]];

  // Step 1: Get meals that match either target kcal
  let matchingMeals = meals[selectedDiet].filter(meal => meal.kcal === target1 || meal.kcal === target2);

  // Step 2: If less than 4, fill randomly from rest
  if (matchingMeals.length < 4) {
    const remainingMeals = meals[selectedDiet].filter(meal => !matchingMeals.includes(meal));
    const needed = 4 - matchingMeals.length;
    const fillers = [...remainingMeals].sort(() => 0.5 - Math.random()).slice(0, needed);
    matchingMeals = matchingMeals.concat(fillers);
  }

  // Step 3: Randomize and slice to exactly 4
  const randomMeals = [...matchingMeals].sort(() => 0.5 - Math.random()).slice(0, 4);

  randomMeals.forEach(meal => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-img"><img src="${meal.img}" alt="${meal.name}"/></div>
      <div class="card-info">
        <h3>${meal.name}</h3>
        <p><strong>Kcal:</strong> ${meal.kcal}</p>
        <p><strong>Protein:</strong> ${meal.protein}g</p>
        <p><strong>Fat:</strong> ${meal.fat}g</p>
        <p><strong>Fibre:</strong> ${meal.fibre}g</p>
      </div>
    `;
    card.onclick = () => showPopup(meal);
    mealCardsContainer.appendChild(card);
  });
}



let popupOpen = false;

function showPopup(meal) {
  if (popupOpen) return;
  popupOpen = true;

  // Set content
  document.getElementById("popupImage").src = meal.img;
  document.getElementById("popupTitle").textContent = meal.name;
  document.getElementById("popupKcal").textContent = meal.kcal;
  document.getElementById("popupProtein").textContent = meal.protein;
  document.getElementById("popupFats").textContent = meal.fat;
  document.getElementById("popupFibre").textContent = meal.fibre;
  document.getElementById("popupReq").textContent = meal.req;
  document.getElementById("popupSteps").textContent = meal.steps;
  document.getElementById("dietTag").textContent = meal.tag;

  document.getElementById("popup").classList.remove("hidden");
  setTimeout(() => popupOpen = false, 500);
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}const recipesLabel = document.getElementById("recipesLabel");
const mealCards = document.getElementById("mealCards");

function displayRecipes() {
  mealCards.innerHTML = ""; // Clear old cards

  for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.className = "meal-card";
    card.innerHTML = `<h3>Meal ${i + 1}</h3><p>Calories: ${400 + i * 100}</p>`;
    mealCards.appendChild(card);
  }

  // Show label
  recipesLabel.classList.remove("hidden");
}
