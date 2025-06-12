from googletrans import Translator

def detect_and_translate(text): 
    translator = Translator()
    detection = translator.detect(text)
    lang = detection.lang
    translated_text = translator.translate(text, src=lang, dest='en').text  
    return lang, translated_text

if __name__ == "__main__":
    import sys 
    text = sys.argv[1] 
    lang, translated_text = detect_and_translate(text)
    print(lang, translated_text)
