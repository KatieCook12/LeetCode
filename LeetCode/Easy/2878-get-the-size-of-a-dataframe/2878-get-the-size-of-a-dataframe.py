import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    return [len(pd.DataFrame(players)), len(pd.DataFrame(players).columns)]
    