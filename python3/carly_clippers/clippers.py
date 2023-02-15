hairstyles = ["bouffant", "pixie", "dreadlocks", "crew", "bowl", "bob", "mohawk", "flattop"]

prices = [30, 25, 40, 20, 20, 35, 50, 35]

last_week = [2, 3, 5, 8, 4, 4, 6, 2]

# Step 1
total_price = 0

# Step 2
for price in prices:
  total_price += price

# Step 3
average_price = total_price / len(prices)

# Step 4
print("Average Haircut Prict: ${0}".format(average_price))

# Step 5
new_prices = [
  price - 5 
  for price in prices
]

# Step 6
print(new_prices)

# Step 7
total_revenue = 0

# Step 8
for i in range(len(hairstyles)):

# Step 9
  total_revenue += prices[i] * last_week[i]

# Step 10
print("Total Revenue: ${0}".format(total_revenue))

# Step 11
average_daily_revenue = total_revenue / 7
print("Average Daily Revenue: ${0}".format(average_daily_revenue))

# Step 12
cuts_under_30 = [
  hairstyles[i]
  for i in range(len(hairstyles))
  if new_prices[i] < 30
]

# Step 13
print(cuts_under_30)