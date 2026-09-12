import re
import random

random.seed(99)

def enrich_room(match):
    original = match.group(0)
    
    area = random.randint(15, 45)
    parking_fees = ["Miễn phí", "100k/tháng", "120k/tháng", "80k/tháng"]
    cleaning_fees = ["Miễn phí", "50k/người", "100k/phòng"]
    
    parking = random.choice(parking_fees)
    cleaning = random.choice(cleaning_fees)
    
    # original ends with "verifiedBy: \"...\" \n    },"
    # We want to insert the new fields before verifiedBy
    
    insert_str = f', area: "{area}m2", parking: "{parking}", cleaning: "{cleaning}"'
    new_str = original.replace('\n        verifiedBy', insert_str + '\n        verifiedBy')
    
    return new_str

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# We match the entire room object from { to }
# since they are well formatted.
content = re.sub(r'\{\s+id: \d+.*?verifiedBy: "[^"]*"\s+\}', enrich_room, content, flags=re.DOTALL)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Data Enriched!")
