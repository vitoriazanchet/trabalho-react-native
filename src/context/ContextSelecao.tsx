import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ItemSelecionado {
  id: string;
  nome: string;
  preco?: string;      
  imagem: any;          
  autor?: string;       
  tipo: 'comida' | 'livro';
}

interface ContextSelecaoType {
  itens: ItemSelecionado[];
  adicionarItem: (item: Omit<ItemSelecionado, 'id'>) => Promise<void>;
  removerItem: (id: string) => Promise<void>;
  limparItens: () => Promise<void>;
}

const ContextSelecao = createContext<ContextSelecaoType | undefined>(undefined);

export function ProvedorSelecao({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemSelecionado[]>([]);

  useEffect(() => {
    async function carregarItensSalvos() {
      try {
        const dadosRaw = await AsyncStorage.getItem('@PetCafe:itensSelecionados');
        if (dadosRaw) {
          setItens(JSON.parse(dadosRaw));
        }
      } catch (error) {
        console.log("Erro ao carregar itens do AsyncStorage:", error);
      }
    }
    carregarItensSalvos();
  }, []);

  const adicionarItem = async (novoItem: Omit<ItemSelecionado, 'id'>) => {
    try {
      const itemCompleto: ItemSelecionado = {
        ...novoItem,
        id: Math.random().toString(36).substring(2, 11),
      };
      const listaAtualizada = [...itens, itemCompleto];
      setItens(listaAtualizada);
      await AsyncStorage.setItem('@PetCafe:itensSelecionados', JSON.stringify(listaAtualizada));
    } catch (error) {
      console.log("Erro ao salvar item:", error);
    }
  };

  const removerItem = async (id: string) => {
    try {
      const listaFiltrada = itens.filter(item => item.id !== id);
      setItens(listaFiltrada);
      await AsyncStorage.setItem('@PetCafe:itensSelecionados', JSON.stringify(listaFiltrada));
    } catch (error) {
      console.log("Erro ao remover item:", error);
    }
  };

  const limparItens = async () => {
    try {
      setItens([]);
      await AsyncStorage.removeItem('@PetCafe:itensSelecionados');
    } catch (error) {
      console.log("Erro ao limpar dados:", error);
    }
  };

  return (
    <ContextSelecao.Provider value={{ itens, adicionarItem, removerItem, limparItens }}>
      {children}
    </ContextSelecao.Provider>
  );
}

export function useSelecao() {
  const context = useContext(ContextSelecao);
  if (!context) {
    throw new Error('useSelecao deve ser usado dentro de um ProvedorSelecao');
  }
  return context;
}