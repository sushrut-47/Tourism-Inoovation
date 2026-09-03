
locations = [
    {
        "name": "Koramangala",
        "rent": 18000,
        "peace": 5,
        "cafes": 9,
        "nightlife": 9,
        "transport": 9,
        "greenery": 5,
        "shopping": 9,
        "social": 9
    },

    {
        "name": "HSR Layout",
        "rent": 14000,
        "peace": 8,
        "cafes": 7,
        "nightlife": 5,
        "transport": 8,
        "greenery": 7,
        "shopping": 7,
        "social": 7
    },

    {
        "name": "Indiranagar",
        "rent": 22000,
        "peace": 4,
        "cafes": 10,
        "nightlife": 10,
        "transport": 9,
        "greenery": 5,
        "shopping": 10,
        "social": 10
    },

    {
        "name": "Jayanagar",
        "rent": 15000,
        "peace": 9,
        "cafes": 6,
        "nightlife": 4,
        "transport": 8,
        "greenery": 9,
        "shopping": 7,
        "social": 6
    },

    {
        "name": "Whitefield",
        "rent": 16000,
        "peace": 6,
        "cafes": 7,
        "nightlife": 6,
        "transport": 7,
        "greenery": 6,
        "shopping": 9,
        "social": 7
    }
]


# ============================================================
# HELPER FUNCTION
# ============================================================

def ask_rating(question):
    """
    Asks the user to rate something from 1 to 10.
    """

    while True:

        try:
            answer = int(input(question))

            if 1 <= answer <= 10:
                return answer

            print("Please enter a number between 1 and 10.")

        except ValueError:
            print("Please enter a valid number.")


# ============================================================
# INTRODUCTION
# ============================================================

print("\n" + "=" * 60)
print("          SMART LOCATION RECOMMENDER")
print("=" * 60)

print("\nWe will ask you a few questions about your")
print("lifestyle, taste and preferences.")
print("\nYour answers will be used to find the locations")
print("that match you the best.\n")


# ============================================================
# QUESTION 1 — BUDGET
# ============================================================

while True:

    try:

        budget = float(
            input("1. What is your maximum monthly rent budget? ₹")
        )

        if budget > 0:
            break

        print("Please enter a positive amount.")

    except ValueError:
        print("Please enter a valid amount.")


# ============================================================
# QUESTION 2 — PEACE
# ============================================================

peace = ask_rating(
    "\n2. How important is a peaceful and quiet environment? (1-10): "
)


# ============================================================
# QUESTION 3 — CAFES
# ============================================================

cafes = ask_rating(
    "\n3. How important are cafes and restaurants to you? (1-10): "
)


# ============================================================
# QUESTION 4 — NIGHTLIFE
# ============================================================

nightlife = ask_rating(
    "\n4. How important is nightlife and entertainment? (1-10): "
)


# ============================================================
# QUESTION 5 — TRANSPORT
# ============================================================

transport = ask_rating(
    "\n5. How important is public transportation? (1-10): "
)


# ============================================================
# QUESTION 6 — GREENERY
# ============================================================

greenery = ask_rating(
    "\n6. How important are parks, trees and greenery? (1-10): "
)


# ============================================================
# QUESTION 7 — SHOPPING
# ============================================================

shopping = ask_rating(
    "\n7. How important are shopping malls and markets? (1-10): "
)


# ============================================================
# QUESTION 8 — SOCIAL LIFE
# ============================================================

social = ask_rating(
    "\n8. How important is having an active social environment? (1-10): "
)


# ============================================================
# USER PREFERENCES
# ============================================================

preferences = {
    "peace": peace,
    "cafes": cafes,
    "nightlife": nightlife,
    "transport": transport,
    "greenery": greenery,
    "shopping": shopping,
    "social": social
}


# ============================================================
# CALCULATE MATCH SCORE
# ============================================================

def calculate_score(location):

    score = 0

    # --------------------------------
    # BUDGET — 25%
    # --------------------------------

    if location["rent"] <= budget:

        budget_score = 25

    else:

        difference = location["rent"] - budget

        if difference <= 2000:
            budget_score = 20

        elif difference <= 5000:
            budget_score = 12

        elif difference <= 8000:
            budget_score = 5

        else:
            budget_score = 0

    score += budget_score


    # --------------------------------
    # OTHER PREFERENCES
    # --------------------------------

    preference_weights = {
        "peace": 15,
        "cafes": 10,
        "nightlife": 10,
        "transport": 10,
        "greenery": 10,
        "shopping": 10,
        "social": 10
    }


    for preference, weight in preference_weights.items():

        difference = abs(
            location[preference] - preferences[preference]
        )

        # Maximum score when the location
        # perfectly matches the user's preference

        match = max(
            0,
            weight - (difference * (weight / 10))
        )

        score += match


    return round(score, 2)


# ============================================================
# CALCULATE ALL LOCATION SCORES
# ============================================================

for location in locations:

    location["score"] = calculate_score(location)


# ============================================================
# SORT LOCATIONS
# ============================================================

locations.sort(
    key=lambda location: location["score"],
    reverse=True
)


# ============================================================
# DISPLAY RESULTS
# ============================================================

print("\n\n" + "=" * 60)
print("              YOUR RESULTS")
print("=" * 60)

print("\nBased on your answers, these are your best matches:\n")


for number, location in enumerate(locations, start=1):

    print(
        f"{number}. {location['name']} "
        f"— {location['score']}% Match"
    )

    print(
        f"   Monthly Rent: ₹{location['rent']:,}"
    )

    print(
        f"   Peace: {location['peace']}/10 | "
        f"Cafes: {location['cafes']}/10 | "
        f"Nightlife: {location['nightlife']}/10"
    )

    print(
        f"   Transport: {location['transport']}/10 | "
        f"Greenery: {location['greenery']}/10"
    )

    print()


# ============================================================
# BEST RECOMMENDATION
# ============================================================

best = locations[0]

print("=" * 60)
print("              ⭐ BEST MATCH FOR YOU")
print("=" * 60)

print(f"\n📍 Location: {best['name']}")
print(f"⭐ Match Score: {best['score']}%")
print(f"💰 Monthly Rent: ₹{best['rent']:,}")

print("\nWhy this location?")

if best["rent"] <= budget:
    print("✓ Fits within your budget")

if best["peace"] >= peace:
    print("✓ Matches your preference for peace")

if best["cafes"] >= cafes:
    print("✓ Good match for your cafe/restaurant preference")

if best["nightlife"] >= nightlife:
    print("✓ Good match for your nightlife preference")

if best["transport"] >= transport:
    print("✓ Good transportation options")

if best["greenery"] >= greenery:
    print("✓ Good match for your greenery preference")

if best["shopping"] >= shopping:
    print("✓ Good shopping environment")

if best["social"] >= social:
    print("✓ Good social environment")

print("\n" + "=" * 60)
print("       Thank you for using Smart Location Finder!")
print("=" * 60)
