// App State Management
let currentScreen = 'welcome';
let currentQuestionIndex = 0;
let userAnswers = {};
let prakritiResult = null;
let uploadedImage = null;
let currentMealPlan = null;

// Prakriti Assessment Questions
const prakritiQuestions = [
    {
        id: 'body_build',
        text: 'What is your natural body build?',
        options: [
            {
                id: 'thin_light',
                text: 'Thin, light, either very tall or very short',
                doshaImpact: { vata: 3, pitta: 1, kapha: 0 }
            },
            {
                id: 'medium_moderate',
                text: 'Medium, moderate build, well-proportioned',
                doshaImpact: { vata: 1, pitta: 3, kapha: 1 }
            },
            {
                id: 'large_heavy',
                text: 'Large, heavy, solid build',
                doshaImpact: { vata: 0, pitta: 1, kapha: 3 }
            }
        ]
    },
    {
        id: 'weight_gain',
        text: 'How easily do you gain weight?',
        options: [
            {
                id: 'hard_to_gain',
                text: 'Very hard to gain weight, tend to be underweight',
                doshaImpact: { vata: 3, pitta: 1, kapha: 0 }
            },
            {
                id: 'moderate',
                text: 'Moderate, can gain or lose weight with effort',
                doshaImpact: { vata: 1, pitta: 3, kapha: 1 }
            },
            {
                id: 'easy_to_gain',
                text: 'Easy to gain weight, hard to lose it',
                doshaImpact: { vata: 0, pitta: 1, kapha: 3 }
            }
        ]
    },
    {
        id: 'skin_texture',
        text: 'What is your skin texture like?',
        options: [
            {
                id: 'dry_rough',
                text: 'Dry, rough, thin, tends to be cool',
                doshaImpact: { vata: 3, pitta: 0, kapha: 0 }
            },
            {
                id: 'soft_warm',
                text: 'Soft, warm, reddish, moles/freckles',
                doshaImpact: { vata: 0, pitta: 3, kapha: 0 }
            },
            {
                id: 'thick_oily',
                text: 'Thick, oily, cool, pale',
                doshaImpact: { vata: 0, pitta: 0, kapha: 3 }
            }
        ]
    },
    {
        id: 'appetite',
        text: 'How would you describe your appetite?',
        options: [
            {
                id: 'variable_irregular',
                text: 'Variable, irregular, sometimes weak',
                doshaImpact: { vata: 3, pitta: 0, kapha: 0 }
            },
            {
                id: 'strong_sharp',
                text: 'Strong, sharp, can eat large quantities',
                doshaImpact: { vata: 0, pitta: 3, kapha: 0 }
            },
            {
                id: 'slow_steady',
                text: 'Slow, steady, can skip meals easily',
                doshaImpact: { vata: 0, pitta: 0, kapha: 3 }
            }
        ]
    },
    {
        id: 'digestion',
        text: 'How is your digestion?',
        options: [
            {
                id: 'irregular_gas',
                text: 'Irregular, gas, bloating, constipation',
                doshaImpact: { vata: 3, pitta: 0, kapha: 0 }
            },
            {
                id: 'strong_acidic',
                text: 'Strong, acidic, loose stools if upset',
                doshaImpact: { vata: 0, pitta: 3, kapha: 0 }
            },
            {
                id: 'slow_heavy',
                text: 'Slow, heavy, feels congested',
                doshaImpact: { vata: 0, pitta: 0, kapha: 3 }
            }
        ]
    },
    {
        id: 'sleep_pattern',
        text: 'What is your sleep pattern like?',
        options: [
            {
                id: 'light_interrupted',
                text: 'Light, interrupted, less than 7 hours',
                doshaImpact: { vata: 3, pitta: 0, kapha: 0 }
            },
            {
                id: 'moderate_sound',
                text: 'Moderate, sound, 6-8 hours',
                doshaImpact: { vata: 1, pitta: 3, kapha: 1 }
            },
            {
                id: 'deep_long',
                text: 'Deep, long, more than 8 hours',
                doshaImpact: { vata: 0, pitta: 0, kapha: 3 }
            }
        ]
    },
    {
        id: 'temperature_preference',
        text: 'How do you feel about temperature?',
        options: [
            {
                id: 'always_cold',
                text: 'Always cold, prefer warm weather',
                doshaImpact: { vata: 3, pitta: 0, kapha: 1 }
            },
            {
                id: 'always_hot',
                text: 'Always hot, prefer cool weather',
                doshaImpact: { vata: 0, pitta: 3, kapha: 0 }
            },
            {
                id: 'comfortable',
                text: 'Comfortable in most temperatures',
                doshaImpact: { vata: 0, pitta: 0, kapha: 3 }
            }
        ]
    },
    {
        id: 'personality',
        text: 'Which best describes your personality?',
        options: [
            {
                id: 'quick_creative',
                text: 'Quick, creative, enthusiastic, changeable',
                doshaImpact: { vata: 3, pitta: 1, kapha: 0 }
            },
            {
                id: 'intense_perfectionist',
                text: 'Intense, perfectionist, leader, critical',
                doshaImpact: { vata: 0, pitta: 3, kapha: 0 }
            },
            {
                id: 'calm_patient',
                text: 'Calm, patient, steady, supportive',
                doshaImpact: { vata: 0, pitta: 0, kapha: 3 }
            }
        ]
    },
    {
        id: 'memory',
        text: 'How is your memory?',
        options: [
            {
                id: 'quick_forget',
                text: 'Quick to learn, quick to forget',
                doshaImpact: { vata: 3, pitta: 0, kapha: 0 }
            },
            {
                id: 'sharp_accurate',
                text: 'Sharp, clear, accurate memory',
                doshaImpact: { vata: 0, pitta: 3, kapha: 0 }
            },
            {
                id: 'slow_retentive',
                text: 'Slow to learn, but excellent retention',
                doshaImpact: { vata: 0, pitta: 0, kapha: 3 }
            }
        ]
    },
    {
        id: 'stress_response',
        text: 'How do you respond to stress?',
        options: [
            {
                id: 'anxious_worried',
                text: 'Become anxious, worried, fearful',
                doshaImpact: { vata: 3, pitta: 0, kapha: 0 }
            },
            {
                id: 'irritable_angry',
                text: 'Become irritable, angry, frustrated',
                doshaImpact: { vata: 0, pitta: 3, kapha: 0 }
            },
            {
                id: 'withdraw_calm',
                text: 'Withdraw, become calm, or eat',
                doshaImpact: { vata: 0, pitta: 0, kapha: 3 }
            }
        ]
    }
];

// Dosha Descriptions
const doshaDescriptions = {
    vata: {
        title: 'Vata - The Energy of Movement',
        description: 'Vata types are creative, energetic, and quick-thinking. They tend to have a light build, dry skin, and variable energy levels.',
        characteristics: ['Creative and imaginative', 'Quick learner', 'Energetic and enthusiastic', 'Variable appetite', 'Light sleep'],
        diet: ['Warm, cooked foods', 'Healthy oils and fats', 'Warm spices like ginger and cinnamon', 'Regular meal times'],
        lifestyle: ['Consistent daily routine', 'Warm environment', 'Gentle exercise', 'Meditation and calm']
    },
    pitta: {
        title: 'Pitta - The Energy of Transformation',
        description: 'Pitta types are intelligent, ambitious, and sharp-minded. They have a medium build, warm body temperature, and strong digestion.',
        characteristics: ['Sharp and intelligent', 'Ambitious and competitive', 'Strong digestion', 'Moderate build', 'Leadership qualities'],
        diet: ['Cooling foods', 'Sweet and bitter tastes', 'Avoid excessive spicy food', 'Plenty of fresh vegetables'],
        lifestyle: ['Avoid excessive heat', 'Regular exercise', 'Stress management', 'Time in nature']
    },
    kapha: {
        title: 'Kapha - The Energy of Structure',
        description: 'Kapha types are calm, stable, and nurturing. They have a strong build, good stamina, and tend to gain weight easily.',
        characteristics: ['Calm and patient', 'Strong and sturdy', 'Good memory', 'Regular routine', 'Loyal and supportive'],
        diet: ['Light, warm foods', 'Spicy and bitter tastes', 'Reduce heavy foods', 'Honey instead of sugar'],
        lifestyle: ['Regular vigorous exercise', 'Variety in routine', 'Stay warm and dry', 'New challenges and learning']
    }
};

// Ayurvedic Food Database
const ayurvedicFoodDatabase = [
    // Grains
    {
        id: 'basmati_rice',
        name: 'Basmati Rice',
        category: 'Grains',
        doshaEffect: {
            vata: 'decreases',
            pitta: 'neutral',
            kapha: 'increases'
        },
        calories: 130,
        nutrients: {
            protein: 2.7,
            carbs: 28,
            fat: 0.3,
            fiber: 0.4
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'cooling',
            postDigestiveEffect: 'Sweet'
        }
    },
    {
        id: 'quinoa',
        name: 'Quinoa',
        category: 'Grains',
        doshaEffect: {
            vata: 'neutral',
            pitta: 'neutral',
            kapha: 'neutral'
        },
        calories: 120,
        nutrients: {
            protein: 4.4,
            carbs: 21,
            fat: 1.9,
            fiber: 2.8
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'neutral',
            postDigestiveEffect: 'Sweet'
        }
    },
    {
        id: 'oats',
        name: 'Oats',
        category: 'Grains',
        doshaEffect: {
            vata: 'decreases',
            pitta: 'neutral',
            kapha: 'increases'
        },
        calories: 150,
        nutrients: {
            protein: 5,
            carbs: 27,
            fat: 2.5,
            fiber: 4
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'heating',
            postDigestiveEffect: 'Sweet'
        }
    },
    
    // Legumes
    {
        id: 'mung_dal',
        name: 'Mung Dal',
        category: 'Legumes',
        doshaEffect: {
            vata: 'neutral',
            pitta: 'neutral',
            kapha: 'decreases'
        },
        calories: 105,
        nutrients: {
            protein: 7,
            carbs: 19,
            fat: 0.4,
            fiber: 7.6
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'cooling',
            postDigestiveEffect: 'Sweet'
        }
    },
    {
        id: 'lentil_dal',
        name: 'Lentil Dal',
        category: 'Legumes',
        doshaEffect: {
            vata: 'neutral',
            pitta: 'neutral',
            kapha: 'decreases'
        },
        calories: 116,
        nutrients: {
            protein: 9,
            carbs: 20,
            fat: 0.4,
            fiber: 7.9
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'heating',
            postDigestiveEffect: 'Sweet'
        }
    },
    
    // Vegetables
    {
        id: 'sweet_potato',
        name: 'Sweet Potato',
        category: 'Vegetables',
        doshaEffect: {
            vata: 'decreases',
            pitta: 'neutral',
            kapha: 'increases'
        },
        calories: 90,
        nutrients: {
            protein: 2,
            carbs: 21,
            fat: 0.1,
            fiber: 3
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'heating',
            postDigestiveEffect: 'Sweet'
        }
    },
    {
        id: 'spinach',
        name: 'Spinach',
        category: 'Vegetables',
        doshaEffect: {
            vata: 'neutral',
            pitta: 'neutral',
            kapha: 'decreases'
        },
        calories: 23,
        nutrients: {
            protein: 2.9,
            carbs: 3.6,
            fat: 0.4,
            fiber: 2.2
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'cooling',
            postDigestiveEffect: 'Sweet'
        }
    },
    
    // Proteins
    {
        id: 'chicken',
        name: 'Chicken',
        category: 'Protein',
        doshaEffect: {
            vata: 'decreases',
            pitta: 'increases',
            kapha: 'neutral'
        },
        calories: 165,
        nutrients: {
            protein: 31,
            carbs: 0,
            fat: 3.6,
            fiber: 0
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'heating',
            postDigestiveEffect: 'Sweet'
        }
    },
    {
        id: 'fish',
        name: 'Fish',
        category: 'Protein',
        doshaEffect: {
            vata: 'neutral',
            pitta: 'neutral',
            kapha: 'neutral'
        },
        calories: 208,
        nutrients: {
            protein: 22,
            carbs: 0,
            fat: 13,
            fiber: 0
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'neutral',
            postDigestiveEffect: 'Sweet'
        }
    },
    
    // Spices
    {
        id: 'turmeric',
        name: 'Turmeric',
        category: 'Spices',
        doshaEffect: {
            vata: 'decreases',
            pitta: 'neutral',
            kapha: 'decreases'
        },
        calories: 354,
        nutrients: {
            protein: 7.8,
            carbs: 65,
            fat: 9.9,
            fiber: 21
        },
        ayurvedicProperties: {
            taste: 'Bitter',
            energy: 'heating',
            postDigestiveEffect: 'Pungent'
        }
    },
    {
        id: 'ginger',
        name: 'Ginger',
        category: 'Spices',
        doshaEffect: {
            vata: 'decreases',
            pitta: 'neutral',
            kapha: 'decreases'
        },
        calories: 80,
        nutrients: {
            protein: 1.8,
            carbs: 18,
            fat: 0.8,
            fiber: 2
        },
        ayurvedicProperties: {
            taste: 'Pungent',
            energy: 'heating',
            postDigestiveEffect: 'Sweet'
        }
    }
];

// Meal Planning Functions
function generateMealPlan(primaryDosha) {
    const getFoodsForDosha = () => {
        switch (primaryDosha) {
            case 'vata':
                return ayurvedicFoodDatabase.filter(food => 
                    food.doshaEffect.vata !== 'increases' && 
                    (food.doshaEffect.vata === 'decreases' || food.doshaEffect.vata === 'neutral')
                );
            case 'pitta':
                return ayurvedicFoodDatabase.filter(food => 
                    food.doshaEffect.pitta !== 'increases' && 
                    (food.doshaEffect.pitta === 'decreases' || food.doshaEffect.pitta === 'neutral')
                );
            case 'kapha':
                return ayurvedicFoodDatabase.filter(food => 
                    food.doshaEffect.kapha !== 'increases' && 
                    (food.doshaEffect.kapha === 'decreases' || food.doshaEffect.kapha === 'neutral')
                );
            default:
                return ayurvedicFoodDatabase;
        }
    };

    const suitableFoods = getFoodsForDosha();
    
    // Create balanced meal plan
    const grains = suitableFoods.filter(f => f.category === 'Grains');
    const proteins = suitableFoods.filter(f => f.category === 'Protein');
    const vegetables = suitableFoods.filter(f => f.category === 'Vegetables');
    const legumes = suitableFoods.filter(f => f.category === 'Legumes');
    const spices = suitableFoods.filter(f => f.category === 'Spices');

    const getRandomItem = (items) => 
        items[Math.floor(Math.random() * items.length)];

    const breakfast = [
        getRandomItem(grains.length > 0 ? grains : suitableFoods),
        getRandomItem(spices)
    ].filter(Boolean);

    const lunch = [
        getRandomItem(grains.length > 0 ? grains : suitableFoods),
        getRandomItem(proteins.length > 0 ? proteins : legumes),
        getRandomItem(vegetables.length > 0 ? vegetables : suitableFoods),
        getRandomItem(spices)
    ].filter(Boolean);

    const dinner = [
        getRandomItem(grains.length > 0 ? grains : suitableFoods),
        getRandomItem(proteins.length > 0 ? proteins : legumes),
        getRandomItem(vegetables.length > 0 ? vegetables : suitableFoods),
        getRandomItem(spices)
    ].filter(Boolean);

    const snacks = [
        getRandomItem(legumes.length > 0 ? legumes : suitableFoods),
        getRandomItem(vegetables.length > 0 ? vegetables : suitableFoods)
    ].filter(Boolean);

    const totalCalories = [...breakfast, ...lunch, ...dinner, ...snacks]
        .reduce((sum, food) => sum + food.calories, 0);

    const doshaBalance = {
        vata: 0,
        pitta: 0,
        kapha: 0
    };

    [...breakfast, ...lunch, ...dinner, ...snacks].forEach(food => {
        if (food.doshaEffect.vata === 'decreases') doshaBalance.vata--;
        if (food.doshaEffect.vata === 'increases') doshaBalance.vata++;
        if (food.doshaEffect.pitta === 'decreases') doshaBalance.pitta--;
        if (food.doshaEffect.pitta === 'increases') doshaBalance.pitta++;
        if (food.doshaEffect.kapha === 'decreases') doshaBalance.kapha--;
        if (food.doshaEffect.kapha === 'increases') doshaBalance.kapha++;
    });

    return {
        id: `meal-plan-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        meals: {
            breakfast,
            lunch,
            dinner,
            snacks
        },
        totalCalories,
        doshaBalance
    };
}

function generateMealPlan() {
    if (!prakritiResult) {
        alert('Please complete the Prakriti assessment first to get personalized meal recommendations.');
        showScreen('assessment');
        return;
    }
    
    // Show loading state
    document.getElementById('meal-placeholder').style.display = 'none';
    document.getElementById('meal-summary').style.display = 'none';
    document.getElementById('meal-grid').style.display = 'none';
    
    // Show loading
    const mealContainer = document.querySelector('.meal-container');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'text-center py-12';
    loadingDiv.innerHTML = `
        <div class="spinner"></div>
        <p>Generating personalized meal plan...</p>
    `;
    mealContainer.appendChild(loadingDiv);
    
    // Simulate API call
    setTimeout(() => {
        const mealPlan = generateMealPlan(prakritiResult.primaryDosha);
        currentMealPlan = mealPlan;
        displayMealPlan(mealPlan);
        
        // Remove loading
        loadingDiv.remove();
    }, 1500);
}

function displayMealPlan(mealPlan) {
    // Show summary
    document.getElementById('meal-summary').style.display = 'block';
    document.getElementById('total-calories').textContent = `${mealPlan.totalCalories} calories`;
    
    const breakfastCalories = mealPlan.meals.breakfast.reduce((sum, food) => sum + food.calories, 0);
    const lunchCalories = mealPlan.meals.lunch.reduce((sum, food) => sum + food.calories, 0);
    const dinnerCalories = mealPlan.meals.dinner.reduce((sum, food) => sum + food.calories, 0);
    const snacksCalories = mealPlan.meals.snacks.reduce((sum, food) => sum + food.calories, 0);
    
    document.getElementById('breakfast-calories').textContent = `${breakfastCalories} cal`;
    document.getElementById('lunch-calories').textContent = `${lunchCalories} cal`;
    document.getElementById('dinner-calories').textContent = `${dinnerCalories} cal`;
    document.getElementById('snacks-calories').textContent = `${snacksCalories} cal`;
    
    // Show dosha balance
    const doshaBalanceHtml = Object.entries(mealPlan.doshaBalance).map(([dosha, balance]) => `
        <div class="dosha-balance-item">
            <span class="dosha-name capitalize">${dosha}:</span>
            <span class="${balance < 0 ? 'effect-decreases' : balance > 0 ? 'effect-increases' : 'effect-neutral'}">
                ${balance < 0 ? '↓' : balance > 0 ? '↑' : '→'} ${Math.abs(balance)}
            </span>
        </div>
    `).join('');
    
    document.getElementById('dosha-balance').innerHTML = doshaBalanceHtml;
    
    // Show meals
    document.getElementById('meal-grid').style.display = 'grid';
    
    // Display meal items
    displayMealItems('breakfast-items', mealPlan.meals.breakfast);
    displayMealItems('lunch-items', mealPlan.meals.lunch);
    displayMealItems('dinner-items', mealPlan.meals.dinner);
    displayMealItems('snacks-items', mealPlan.meals.snacks);
}

function displayMealItems(containerId, foods) {
    const container = document.getElementById(containerId);
    container.innerHTML = foods.map(food => `
        <div class="food-item">
            <div class="food-header-info">
                <div>
                    <div class="food-name">${food.name}</div>
                    <div class="food-category">${food.category}</div>
                </div>
                <div class="food-calories">${food.calories} cal</div>
            </div>
            
            <div class="nutrients-grid">
                <div class="nutrient-item">
                    <div class="nutrient-label">Protein</div>
                    <div class="nutrient-value">${food.nutrients.protein}g</div>
                </div>
                <div class="nutrient-item">
                    <div class="nutrient-label">Carbs</div>
                    <div class="nutrient-value">${food.nutrients.carbs}g</div>
                </div>
                <div class="nutrient-item">
                    <div class="nutrient-label">Fat</div>
                    <div class="nutrient-value">${food.nutrients.fat}g</div>
                </div>
                <div class="nutrient-item">
                    <div class="nutrient-label">Fiber</div>
                    <div class="nutrient-value">${food.nutrients.fiber}g</div>
                </div>
            </div>
            
            <div class="dosha-effects">
                <h4>Dosha Effects:</h4>
                <div class="dosha-effect-list">
                    ${Object.entries(food.doshaEffect).map(([dosha, effect]) => `
                        <div class="dosha-effect-item">
                            <span class="dosha-name">${dosha}:</span>
                            <span class="effect-${effect}">${effect === 'increases' ? '↑' : effect === 'decreases' ? '↓' : '→'} ${effect}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="ayurvedic-properties">
                <strong>Ayurvedic Properties:</strong> ${food.ayurvedicProperties.taste} taste, 
                ${food.ayurvedicProperties.energy} energy, ${food.ayurvedicProperties.postDigestiveEffect} post-digestive effect
            </div>
        </div>
    `).join('');
}
const mockFoodDatabase = [
    {
        id: '1',
        name: 'Basmati Rice',
        category: 'Grains',
        doshaEffect: {
            vata: 'decreases',
            pitta: 'neutral',
            kapha: 'increases'
        },
        calories: 130,
        nutrients: {
            protein: 2.7,
            carbs: 28,
            fat: 0.3,
            fiber: 0.4
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'cooling',
            postDigestiveEffect: 'Sweet'
        }
    },
    {
        id: '2',
        name: 'Lentil Dal',
        category: 'Legumes',
        doshaEffect: {
            vata: 'neutral',
            pitta: 'neutral',
            kapha: 'decreases'
        },
        calories: 116,
        nutrients: {
            protein: 9,
            carbs: 20,
            fat: 0.4,
            fiber: 7.9
        },
        ayurvedicProperties: {
            taste: 'Sweet',
            energy: 'heating',
            postDigestiveEffect: 'Sweet'
        }
    },
    {
        id: '3',
        name: 'Mixed Vegetables',
        category: 'Vegetables',
        doshaEffect: {
            vata: 'increases',
            pitta: 'decreases',
            kapha: 'decreases'
        },
        calories: 35,
        nutrients: {
            protein: 1.8,
            carbs: 7.8,
            fat: 0.2,
            fiber: 2.6
        },
        ayurvedicProperties: {
            taste: 'Mixed',
            energy: 'cooling',
            postDigestiveEffect: 'Pungent'
        }
    },
    {
        id: '4',
        name: 'Chicken Curry',
        category: 'Protein',
        doshaEffect: {
            vata: 'decreases',
            pitta: 'increases',
            kapha: 'neutral'
        },
        calories: 280,
        nutrients: {
            protein: 25,
            carbs: 8,
            fat: 18,
            fiber: 2.1
        },
        ayurvedicProperties: {
            taste: 'Spicy',
            energy: 'heating',
            postDigestiveEffect: 'Pungent'
        }
    },
    {
        id: '5',
        name: 'Fresh Salad',
        category: 'Vegetables',
        doshaEffect: {
            vata: 'increases',
            pitta: 'decreases',
            kapha: 'decreases'
        },
        calories: 45,
        nutrients: {
            protein: 2.1,
            carbs: 8.5,
            fat: 0.5,
            fiber: 3.2
        },
        ayurvedicProperties: {
            taste: 'Mixed',
            energy: 'cooling',
            postDigestiveEffect: 'Pungent'
        }
    }
];

// Screen Management
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(`${screenName}-screen`).classList.add('active');
    currentScreen = screenName;
    
    // Initialize screen-specific content
    if (screenName === 'assessment') {
        initializeAssessment();
    }
}

// Prakriti Assessment Functions
function initializeAssessment() {
    currentQuestionIndex = 0;
    userAnswers = {};
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const question = prakritiQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.text;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.text;
        button.onclick = () => selectOption(option.id);
        optionsContainer.appendChild(button);
    });
    
    // Update question counter
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = prakritiQuestions.length;
    
    // Update previous button state
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
}

function selectOption(optionId) {
    const question = prakritiQuestions[currentQuestionIndex];
    userAnswers[question.id] = optionId;
    
    if (currentQuestionIndex < prakritiQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
    } else {
        calculatePrakriti();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / prakritiQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function calculatePrakriti() {
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    
    prakritiQuestions.forEach(question => {
        const selectedOptionId = userAnswers[question.id];
        const selectedOption = question.options.find(opt => opt.id === selectedOptionId);
        
        if (selectedOption) {
            scores.vata += selectedOption.doshaImpact.vata;
            scores.pitta += selectedOption.doshaImpact.pitta;
            scores.kapha += selectedOption.doshaImpact.kapha;
        }
    });
    
    const total = scores.vata + scores.pitta + scores.kapha;
    const percentages = {
        vata: Math.round((scores.vata / total) * 100),
        pitta: Math.round((scores.pitta / total) * 100),
        kapha: Math.round((scores.kapha / total) * 100)
    };
    
    const doshas = ['vata', 'pitta', 'kapha'];
    const sortedDoshas = doshas.sort((a, b) => scores[b] - scores[a]);
    
    prakritiResult = {
        primaryDosha: sortedDoshas[0],
        secondaryDosha: sortedDoshas[1],
        percentages: percentages,
        scores: scores
    };
    
    displayResults();
}

function displayResults() {
    showScreen('results');
    
    // Update dosha bars
    setTimeout(() => {
        document.getElementById('vata-bar').style.width = `${prakritiResult.percentages.vata}%`;
        document.getElementById('pitta-bar').style.width = `${prakritiResult.percentages.pitta}%`;
        document.getElementById('kapha-bar').style.width = `${prakritiResult.percentages.kapha}%`;
        
        document.getElementById('vata-percentage').textContent = `${prakritiResult.percentages.vata}%`;
        document.getElementById('pitta-percentage').textContent = `${prakritiResult.percentages.pitta}%`;
        document.getElementById('kapha-percentage').textContent = `${prakritiResult.percentages.kapha}%`;
    }, 100);
    
    // Update constitution info
    document.getElementById('primary-dosha').textContent = prakritiResult.primaryDosha.charAt(0).toUpperCase() + prakritiResult.primaryDosha.slice(1);
    document.getElementById('secondary-dosha').textContent = prakritiResult.secondaryDosha ? 
        prakritiResult.secondaryDosha.charAt(0).toUpperCase() + prakritiResult.secondaryDosha.slice(1) : 'None';
    
    // Update card border color
    const resultCard = document.getElementById('primary-dosha-card');
    resultCard.className = `result-card dosha-card ${prakritiResult.primaryDosha}`;
    
    // Display dosha details
    const primaryDoshaInfo = doshaDescriptions[prakritiResult.primaryDosha];
    const doshaDetails = document.getElementById('dosha-details');
    
    doshaDetails.innerHTML = `
        <h3>${primaryDoshaInfo.title}</h3>
        <p>${primaryDoshaInfo.description}</p>
        
        <div class="dosha-grid">
            <div class="dosha-section">
                <h4>Characteristics</h4>
                <ul class="dosha-list">
                    ${primaryDoshaInfo.characteristics.map(char => `<li>${char}</li>`).join('')}
                </ul>
            </div>
            
            <div class="dosha-section">
                <h4>Recommended Diet</h4>
                <ul class="dosha-list">
                    ${primaryDoshaInfo.diet.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="dosha-section">
                <h4>Lifestyle Tips</h4>
                <ul class="dosha-list">
                    ${primaryDoshaInfo.lifestyle.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function retakeAssessment() {
    currentQuestionIndex = 0;
    userAnswers = {};
    prakritiResult = null;
    showScreen('assessment');
}

// Food Recognition Functions
function initializeFoodRecognition() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    
    // Click to upload
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    // File input change
    fileInput.addEventListener('change', handleFileSelect);
    
    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedImage = e.target.result;
        displayImagePreview();
    };
    reader.readAsDataURL(file);
}

function displayImagePreview() {
    document.getElementById('upload-area').style.display = 'none';
    document.getElementById('image-preview').style.display = 'block';
    document.getElementById('preview-img').src = uploadedImage;
}

function removeImage() {
    uploadedImage = null;
    document.getElementById('upload-area').style.display = 'block';
    document.getElementById('image-preview').style.display = 'none';
    document.getElementById('food-results').style.display = 'none';
    document.getElementById('file-input').value = '';
}

function analyzeFood() {
    if (!uploadedImage) return;
    
    // Show processing
    document.getElementById('processing').style.display = 'block';
    document.getElementById('food-results').style.display = 'none';
    
    // Simulate API call
    setTimeout(() => {
        // Randomly select 2-4 food items for demo
        const numItems = Math.floor(Math.random() * 3) + 2;
        const selectedFoods = [];
        const indices = [];
        
        while (indices.length < numItems) {
            const index = Math.floor(Math.random() * mockFoodDatabase.length);
            if (!indices.includes(index)) {
                indices.push(index);
                selectedFoods.push(mockFoodDatabase[index]);
            }
        }
        
        displayFoodResults(selectedFoods);
        document.getElementById('processing').style.display = 'none';
    }, 2000);
}

function displayFoodResults(foodItems) {
    const resultsContainer = document.getElementById('food-results');
    
    const totalCalories = foodItems.reduce((sum, food) => sum + food.calories, 0);
    
    let html = `
        <h3>Identified Foods (${foodItems.length})</h3>
        <div class="food-items">
    `;
    
    foodItems.forEach(food => {
        html += `
            <div class="food-item">
                <div class="food-header-info">
                    <div>
                        <div class="food-name">${food.name}</div>
                        <div class="food-category">${food.category}</div>
                    </div>
                    <div class="food-calories">${food.calories} cal</div>
                </div>
                
                <div class="nutrients-grid">
                    <div class="nutrient-item">
                        <div class="nutrient-label">Protein</div>
                        <div class="nutrient-value">${food.nutrients.protein}g</div>
                    </div>
                    <div class="nutrient-item">
                        <div class="nutrient-label">Carbs</div>
                        <div class="nutrient-value">${food.nutrients.carbs}g</div>
                    </div>
                    <div class="nutrient-item">
                        <div class="nutrient-label">Fat</div>
                        <div class="nutrient-value">${food.nutrients.fat}g</div>
                    </div>
                    <div class="nutrient-item">
                        <div class="nutrient-label">Fiber</div>
                        <div class="nutrient-value">${food.nutrients.fiber}g</div>
                    </div>
                </div>
                
                <div class="dosha-effects">
                    <h4>Dosha Effects:</h4>
                    <div class="dosha-effect-list">
                        ${Object.entries(food.doshaEffect).map(([dosha, effect]) => {
                            const effectClass = `effect-${effect}`;
                            const icon = effect === 'increases' ? '↑' : effect === 'decreases' ? '↓' : '→';
                            return `
                                <div class="dosha-effect-item">
                                    <span class="dosha-name">${dosha}:</span>
                                    <span class="${effectClass}">${icon} ${effect}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="ayurvedic-properties">
                    <strong>Ayurvedic Properties:</strong> ${food.ayurvedicProperties.taste} taste, 
                    ${food.ayurvedicProperties.energy} energy, ${food.ayurvedicProperties.postDigestiveEffect} post-digestive effect
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
        <div class="total-calories">
            <p><strong>Total Calories:</strong> ${totalCalories} cal</p>
        </div>
    `;
    
    resultsContainer.innerHTML = html;
    resultsContainer.style.display = 'block';
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeFoodRecognition();
});

// Global function for button clicks
window.showScreen = showScreen;
window.previousQuestion = previousQuestion;
window.retakeAssessment = retakeAssessment;
window.removeImage = removeImage;
window.analyzeFood = analyzeFood;
window.generateMealPlan = generateMealPlan;
