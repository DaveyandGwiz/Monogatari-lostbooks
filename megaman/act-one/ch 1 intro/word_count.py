import datetime

def count_words_in_file(filename):
    """
    Reads the specified file and counts the words using UTF-8 encoding.
    
    Parameters:
    filename (str): The path to the text file from which to count words.
    
    Returns:
    int: The number of words in the file, or 0 if the file does not exist.
    """
    try:
        with open(filename, 'r', encoding='utf-8') as file:  # Specify UTF-8 encoding
            content = file.read()
        word_count = len(content.split())
        return word_count
    except FileNotFoundError:
        print("File not found.")
        return 0
    except UnicodeDecodeError:
        print("Decoding error in the file. Please ensure the file is encoded in UTF-8.")
        return 0

def log_word_count(word_count, log_filename="word_count_log.txt"):
    """
    Appends the current date and word count to the log file using UTF-8 encoding.
    
    Parameters:
    word_count (int): The number of words to log.
    log_filename (str): The path to the log file where the word count is recorded.
    """
    today = datetime.date.today()
    try:
        with open(log_filename, 'a', encoding='utf-8') as log:  # Also specify UTF-8 here
            log.write(f"{today}: {word_count} words\n")
    except Exception as e:
        print(f"Failed to write to log: {e}")

def main():
    """
    Main function to execute the script actions.
    """
    filename = "ch 1 intro.txt"  # Replace with your text file's name or path
    word_count = count_words_in_file(filename)
    log_word_count(word_count)

if __name__ == "__main__":
    main()
