{
  description = "Skilldex";

  inputs = {
    nixpkgs = "github:nixos/nixpkgs/nixos-25.05";
  };

  outputs = { nixpkgs, ... }: 
    let
      lib = nixpkgs.lib;
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
    in
    {
      devShells = lib.genAttrs systems ( system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        {
          buildInputs = [
            pkgs.nodejs_24
            pkgs.bun
            pkgs.pnpm
          ];
      });
    };
}
