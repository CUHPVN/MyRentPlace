import urllib.request
import re
import json

req = urllib.request.Request('https://html.duckduckgo.com/html/?q=ph%C3%B2ng+tr%E1%BB%8D+sinh+vi%C3%AAn+c%C3%B3+g%C3%A1c+l%E1%BB%ADng+s%E1%BA%A1ch+s%E1%BA%BD', headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'src=\"(//external-content\.duckduckgo\.com/[^\"]+)\"', html)
    print('Found DDG images:', len(images))
    with open("scraped_images.json", "w") as f:
        json.dump(images, f)
except Exception as e:
    print('DDG error:', e)

req2 = urllib.request.Request('https://www.youtube.com/results?search_query=review+ph%C3%B2ng+tr%E1%BB%8D+sinh+vi%C3%AAn', headers={'User-Agent': 'Mozilla/5.0'})
try:
    html2 = urllib.request.urlopen(req2).read().decode('utf-8')
    match = re.search(r'\"videoId\":\"([a-zA-Z0-9_-]{11})\"', html2)
    if match:
        print('Youtube ID:', match.group(1))
        with open("scraped_video.txt", "w") as f:
            f.write(match.group(1))
except Exception as e:
    print('Youtube error:', e)
