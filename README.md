# React Training!!!

1. VSCode 작업 영역 열기로 프로젝트를 열어줍니다
    
    `workspace.code-workspace` 

2. Root 폴더에서 packages 폴더로 들어갑니다.
   
3. packages 폴더 우클릭 → Create New Templated Folder → ROOT 선택 → 본인 이름 이니셜 입력 ex) cjg

   * 이니셜이 중복되지 않도록 해주세요 (중복된다면 이니셜 뒤에 숫자를 넣어주세요)

4. 터미널을 열고 yarn install 명령어를 입력해 주세요

    ```bash
    yarn install
    ```

5. packages/<본인 이니셜> 폴더를 `workspace.code-workspace`에 추가해 주세요

    * folders에 추가해 주세요

        ```bash
        {
            "name": "――― <본인 이니셜> ―――",
            "path": "./packages/<본인 이니셜>"
        }
        ```

    * 예시

        ```bash
        {
            "folders": [
                {
                "name": "ROOT",
                "path": "."
                },

                ...

                {
                "name": "――― CJG ―――",
                "path": "./packages/cjg"
                }
            ],

            ...
        }
        ```

6. `NPM 스크립트`에서 "――― <본인 이니셜> ―――"의 "start:<본인 이니셜>"을 실행하고 Training을 진행해 주세요

    * 예시

        `――― cjg ―――`

        `start:cjg`