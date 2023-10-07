import xml.etree.ElementTree as ET

def extract_coverage(cobertura_file):
    tree = ET.parse(cobertura_file)
    root = tree.getroot()
    line_rate = root.get('line-rate')
    return int(round(float(line_rate) * 100, 0))

if __name__ == "__main__":
    coverage_percentage = extract_coverage('cobertura.xml')
    print(coverage_percentage)
