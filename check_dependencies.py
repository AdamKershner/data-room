#!/usr/bin/env python3
"""Check if all required dependencies are installed."""

import sys
import importlib

required_packages = {
    'pandas': '>=2.0.0',
    'numpy': '>=1.24.0',
    'openpyxl': '>=3.1.0'
}

print("Python version:", sys.version)
print("\nChecking required packages...")
print("=" * 60)

all_installed = True

for package, version_req in required_packages.items():
    try:
        mod = importlib.import_module(package)
        version = getattr(mod, '__version__', 'unknown')
        print(f"✓ {package:12} {version:15} (required: {version_req})")
    except ImportError:
        print(f"✗ {package:12} NOT INSTALLED (required: {version_req})")
        all_installed = False

print("=" * 60)

if all_installed:
    print("\n✓ All dependencies are installed!")
    print("\nYou can now run:")
    print("  python generate_investor_summary.py")
    print("  python run_analysis.py")
else:
    print("\n✗ Some dependencies are missing.")
    print("\nTo install, run:")
    print("  pip install -r requirements.txt")
    print("\nOr install individually:")
    print("  pip install pandas>=2.0.0 numpy>=1.24.0 openpyxl>=3.1.0")

sys.exit(0 if all_installed else 1)



