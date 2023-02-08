weight = 4.8
print("The package weighs", weight, "lbs")

## Ground Shipping

if weight <= 2:
  cost_ground = weight * 1.5 + 20
elif weight <=6:
  cost_ground = weight * 3 + 20
elif weight <= 10: 
  cost_ground = weight * 4 + 20
elif weight >= 10:
  cost_ground = weight * 4.75 + 20

print("Ground Shipping Costs: $", cost_ground)

## Premium Ground Shipping

cost_ground_premium = 125

print("Ground Shipping Premium: $", cost_ground_premium)

## Drone Shipping

if weight <= 2:
  drone_shipping = weight * 4.5 
elif weight <= 6:
  drone_shipping = weight * 9
elif weight <= 10:
  drone_shipping = weight * 12
else:
  drone_shipping = weight * 14.25

print("Drone Shipping Costs: $", drone_shipping)