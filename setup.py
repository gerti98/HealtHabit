import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="HealtHapy",
    version="0.0.1",
    author_email="info.healthabit@gmail.com",
    description="The Python library that feeds the HealtHabit universe",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/GregoryPardini/HealtHabit",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires="==3.8",
    install_requires=[
        "numpy==1.19.2",
        "pandas>=0.25",
        "requests",
    ],
)
