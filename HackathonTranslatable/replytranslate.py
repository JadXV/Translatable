import base64
import sys
from googletrans import Translator

def translate_text(text, target_language): 
    translator = Translator() 
    translation = translator.translate(text, dest=target_language) 
    return translation.text

if __name__ == "__main__":
    text = sys.argv[1] 
    target_language = sys.argv[2] 
    translation = translate_text(text, target_language) 
    encoded_translation = base64.b64encode(translation.encode('utf-8')).decode('utf-8')
    print(encoded_translation) 
