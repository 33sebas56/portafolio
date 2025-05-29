"use client"

import { useState, useEffect, useCallback } from "react"

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [gameStatus, setGameStatus] = useState("playing")
  const [showMessage, setShowMessage] = useState(false)

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Filas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columnas
    [0, 4, 8],
    [2, 4, 6], // Diagonales
  ]

  const checkWinner = useCallback((currentBoard: (string | null)[]) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a]
      }
    }
    return null
  }, [winningCombinations])

  const isBoardFull = (currentBoard: (string | null)[]) => {
    return currentBoard.every((cell) => cell !== null)
  }

  const getBestMove = useCallback((currentBoard: (string | null)[]) => {
    // Estrategia: siempre bloquear al jugador o ganar si es posible

    // 1. Verificar si la IA puede ganar
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        const testBoard = [...currentBoard]
        testBoard[i] = "O"
        if (checkWinner(testBoard) === "O") {
          return i
        }
      }
    }

    // 2. Bloquear al jugador si está a punto de ganar
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        const testBoard = [...currentBoard]
        testBoard[i] = "X"
        if (checkWinner(testBoard) === "X") {
          return i
        }
      }
    }

    // 3. Tomar el centro si está disponible
    if (currentBoard[4] === null) {
      return 4
    }

    // 4. Tomar una esquina
    const corners = [0, 2, 6, 8]
    const availableCorners = corners.filter((i) => currentBoard[i] === null)
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)]
    }

    // 5. Tomar cualquier posición disponible
    const availableSpots = currentBoard
      .map((cell, index) => (cell === null ? index : null))
      .filter((val) => val !== null)
    return availableSpots[Math.floor(Math.random() * availableSpots.length)] || 0
  }, [checkWinner])

  const handleCellClick = (index: number) => {
    if (board[index] || !isPlayerTurn || gameStatus !== "playing") return

    const newBoard = [...board]
    newBoard[index] = "X"
    setBoard(newBoard)
    setIsPlayerTurn(false)

    const winner = checkWinner(newBoard)
    if (winner) {
      setGameStatus(winner === "X" ? "player" : "ai")
      if (winner === "X") {
        setShowMessage(true)
      }
    } else if (isBoardFull(newBoard)) {
      setGameStatus("tie")
    }
  }

  useEffect(() => {
    if (!isPlayerTurn && gameStatus === "playing") {
      const timer = setTimeout(() => {
        const aiMove = getBestMove(board)
        const newBoard = [...board]
        newBoard[aiMove] = "O"
        setBoard(newBoard)
        setIsPlayerTurn(true)

        const winner = checkWinner(newBoard)
        if (winner) {
          setGameStatus(winner === "X" ? "player" : "ai")
        } else if (isBoardFull(newBoard)) {
          setGameStatus("tie")
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isPlayerTurn, board, gameStatus, getBestMove, checkWinner])

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsPlayerTurn(true)
    setGameStatus("playing")
    setShowMessage(false)
  }

  const getStatusMessage = () => {
    switch (gameStatus) {
      case "player":
        return "¡Increíble! ¡Ganaste! 🎉"
      case "ai":
        return "¡Te gané! 😄 ¿Me contratas?"
      case "tie":
        return "¡Empate! Buen juego 🤝"
      default:
        return isPlayerTurn ? "Tu turno (X)" : "Mi turno (O)..."
    }
  }

  return (
    <section id="juguemos" className="section">
      <div className="container">
        <h2 className="section-title">¡Juguemos!</h2>

        <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "1.3rem", marginBottom: "1rem", color: "var(--accent-gold)" }}>Tres en Raya</p>

          <p style={{ fontSize: "1.1rem", marginBottom: "2rem", fontStyle: "italic" }}>&quot;Si te gano, ¡contrátame!&quot; 😉</p>

          <div
            className="tictactoe-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
              maxWidth: "300px",
              margin: "0 auto 2rem",
              background: "rgba(255, 255, 255, 0.05)",
              padding: "1rem",
              borderRadius: "15px",
              border: "1px solid rgba(255, 215, 0, 0.3)",
            }}
          >
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleCellClick(index)}
                className="tictactoe-cell"
                style={{
                  width: "80px",
                  height: "80px",
                  border: "2px solid var(--accent-gold)",
                  background: cell ? "rgba(255, 215, 0, 0.1)" : "rgba(255, 255, 255, 0.05)",
                  color: cell === "X" ? "#ff6b6b" : cell === "O" ? "var(--accent-gold)" : "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  cursor: cell || gameStatus !== "playing" ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                disabled={!!cell || gameStatus !== "playing"}
                onMouseOver={(e) => {
                  if (!cell && gameStatus === "playing") {
                    e.currentTarget.style.background = "rgba(255, 215, 0, 0.2)"
                  }
                }}
                onMouseOut={(e) => {
                  if (!cell) {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                  }
                }}
              >
                {cell}
              </button>
            ))}
          </div>

          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              color: gameStatus === "player" ? "#4ade80" : gameStatus === "ai" ? "var(--accent-gold)" : "white",
              fontWeight: "600",
            }}
          >
            {getStatusMessage()}
          </p>

          {showMessage && gameStatus === "player" && (
            <div
              style={{
                background: "rgba(74, 222, 128, 0.1)",
                border: "1px solid #4ade80",
                borderRadius: "15px",
                padding: "1rem",
                marginBottom: "2rem",
              }}
            >
              <p style={{ color: "#4ade80", fontStyle: "italic" }}>
                ¡Wow! Realmente tienes habilidades. ¡Definitivamente deberías contratarme! 🚀
              </p>
            </div>
          )}

          <button
            onClick={resetGame}
            className="btn btn-primary"
            style={{ fontSize: "1.1rem", padding: "0.8rem 2rem" }}
          >
            Nuevo Juego
          </button>
        </div>
      </div>
    </section>
  )
}