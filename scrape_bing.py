import urllib.request
import re
import json

req = urllib.request.Request('https://www.bing.com/images/search?q=ph%C3%B2ng+tr%E1%BB%8D+sinh+vi%C3%AAn+c%C3%B3+g%C3%A1c+l%E1%BB%ADng', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # Bing images are usually inside m="..." which is a json object containing murl
    matches = re.findall(r'murl&quot;:&quot;(http[^&]+)&quot;', html)
    
    print('Found Bing images:', len(matches))
    if matches:
        with open("bing_images.json", "w") as f:
            json.dump(matches, f)
except Exception as e:
    print('Bing error:', e)
