# Export

Exporting Items from Omeka S is possible by using a python script to query the installation's API. 

[omeka-s-csv.py](https://github.com/omeka/omeka-s-csv.py) is a Python script that exports data from Omeka S installations in CSV format.

## Requirements

omeka-s-csv.py works with either Python 2 or 3, and requires no additional or external dependencies.

Linux users will likely have Python already installed, and packages should be available from your distribution. There are several options for installing Python on Windows and Mac, including downloading an installer [from Python's website](https://www.python.org/downloads/).

## Usage

In a terminal in the folder where omeka-s-csv.py is located on your system, run the script:

```
python3 omeka-s-csv.py
```

(this can also be done, depending on the system, as `./omeka-s-csv.py`, `python omeka-s-csv.py`, or `python2 omeka-s-csv.py`.)

The script will prompt you for the Omeka S API endpoint you want to export from. This is a URL pointing to the target Omeka S installation, and should start with `http://` or `https://` end with `/api`.

Next, you will be prompted for an API key. Keys are required to export non-public data from the site, but are optional if you're only exporting public data. If you're not using a key, you can leave the input blank and just press Enter.

Finally, a prompt will ask you to enter a "separator," a character that's used to separate multiple pieces of data in a single CSV cell. It's important that the chosen separator is a character that doesn't appear in the actual data. The default choice is the "pipe" character (`|`), which is usually a safe option. To use that default choice, just press Enter, otherwise type the separator character you want to use instead.

The script will then run, and show output indicating its progress. The exported results will be placed in files in the same folder as the omeka-s-csv.py file: `items.csv`, `item_sets.csv`, and so on.
