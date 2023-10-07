from src.helper.example_helper import add_two_numbers

def test_add_two_numbers():
    assert add_two_numbers(1, 2) == 3
    assert add_two_numbers(-1, 1) == 0
    assert add_two_numbers(0, 0) == 0
    assert add_two_numbers(-1, -2) == -3